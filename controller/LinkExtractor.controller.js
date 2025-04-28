import { LinkExtractorService } from "../services/LinkExtractorService.js";

export const LinkExtractor = async (req, res) => {
    try {
        const { url } = req.body;
        if (!url) {
            return res.status(400).json({ message: "URL is required" });
        }
        // Validate the URL format
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!urlPattern.test(url)) {
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