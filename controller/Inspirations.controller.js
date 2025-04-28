import { extractDetailsWithTheUrl } from "../utils/puppeteerHelper.js";
import { createInspiration } from "../services/InspirationService.js";

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
                data.push(extractedData);
            }
        }
        // Check if data is empty after processing all URLs
        if (data.length === 0) {
            return res.status(400).json({ message: "No valid data extracted from the provided URLs." });
        }

        // Assuming createInspiration is a function that saves the data to the database
        let createdInspiration = [];
        for (const item of data) {
            let inpiration = await createInspiration(item);
            if (!inpiration) {
                createdInspiration.push(inpiration);
            }
            createdInspiration.push(inpiration);
        }

        return res.status(201).json(createdInspiration);
    } catch (error) {
        console.error("Error creating inspiration:", error);
        return res.status(500).json({ error: error || "Internal server error." });
    }
}