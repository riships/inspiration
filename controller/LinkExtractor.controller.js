import { LinkExtractorService } from "../services/LinkExtractorService.js";
import logger from "../utils/winston.logger.js";

export const LinkExtractor = async (req, res) => {
    try {
        const { url } = req.body;
        logger.log('info', `Received URL for link extraction: ${url}`);
        if (!url) {
            logger.log('error', "URL is required for link extraction");
            return res.status(400).json({ message: "URL is required" });
        }
        // Validate the URL format
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!urlPattern.test(url)) {
            logger.log('error', "Invalid URL format");
            return res.status(400).json({ message: "Invalid URL format" });
        }
        const links = await LinkExtractorService(url);
        if (!links || links.length === 0) {
            return res.status(404).json({ message: "No links found" });
        }
        // Check if the links are valid
        res.status(200).json({ links });
    } catch (error) {
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
}