import { LinkExtractorService } from "../services/LinkExtractorService.js";
import AppError from "../utils/AppError.js";

export const LinkExtractor = async (req, res, next) => {
    try {
        const { url } = req.body;

        if (!url) {
            return next(new AppError("URL is required", 400));
        }

        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!urlPattern.test(url)) {
            return next(new AppError("Invalid URL format", 400));
        }

        const links = await LinkExtractorService(url);

        if (!links || links.length === 0) {
            return next(new AppError("No links found", 404));
        }
        res.status(200).json({ links });
    } catch (error) {
        next(error); // Pass to global error handler
    }
};
