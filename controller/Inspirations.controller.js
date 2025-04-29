import { extractDetailsWithTheUrl } from "../utils/puppeteerHelper.js";
import { createInspiration } from "../services/InspirationService.js";
import logger from "../utils/winston.logger.js";

export const createInspirationController = async (req, res) => {
    try {
        const { urls } = req.body;
        if (!urls || !Array.isArray(urls) || urls.length === 0) {
            return res.status(400).json({ message: "Invalid input. Please provide an array of URLs." });
        }

        let data = [];
        for (const url of urls) {
            const extractedData = await extractDetailsWithTheUrl(url);
            if (extractedData) {
                let inpiration = await createInspiration(extractedData);
                if (inpiration && inpiration.success) {
                    logger.log('info', `Inspiration created successfully for URL: ${url}`);
                    data.push(inpiration.data);
                } else {
                    logger.log('error', `Failed to create inspiration for URL: ${url}. Error: ${inpiration.message}`);
                    return res.status(400).json({ message: inpiration.message || "Failed to create inspiration." });
                }
            }
        }
        // Check if data is empty after processing all URLs
        if (data.length === 0) {
            return res.status(400).json({ message: "No valid data extracted from the provided URLs." });
        }
        
        return res.status(201).json(data);
    } catch (error) {
        console.error("Error creating inspiration:", error.message);
        return res.status(500).json({ error: error.message || "Internal server error." });
    }
}