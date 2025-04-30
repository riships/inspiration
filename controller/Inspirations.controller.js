import { extractDetailsWithTheUrl } from "../utils/puppeteerHelper.js";
import { createInspiration, getInspiration, getInspirationBySlug } from "../services/InspirationService.js";
import AppError from "../utils/AppError.js";

export const createInspirationController = async (req, res, next) => {
    try {
        const { urls } = req.body;
        if (!urls || !Array.isArray(urls) || urls.length === 0) {
            return next(new AppError("Please provide an array of URLs.", 400));
        }

        let data = [];
        for (const url of urls) {
            const extractedData = await extractDetailsWithTheUrl(url);
            if (extractedData) {
                let inpiration = await createInspiration(extractedData);
                data.push(inpiration);
            }
        }
        if (data.length === 0) {
            next(new AppError("No valid data found to create inspirations.", 400));
        }
        return res.status(201).json(data);
    } catch (error) {
        return next(new AppError(error, 500));
    }
}

export const getAllInspirationsController = async (req, res, next) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const inspiration = await getInspiration();
        if (!inspiration) {
            return next(new AppError("Inspiration not found.", 404));
        }

        const pageNumber = parseInt(page, 10) || 1;
        const limitNumber = parseInt(limit, 10) || 10;
        const startIndex = (pageNumber - 1) * limitNumber;
        const endIndex = pageNumber * limitNumber;
        const paginatedInspiration = inspiration.slice(startIndex, endIndex);
        const totalPages = Math.ceil(inspiration.length / limitNumber);
        const response = {
            totalPages,
            currentPage: pageNumber,
            limit: limitNumber,
            inspirations: paginatedInspiration,
        };
        return res.status(200).json(response);
    } catch (error) {
        return next(new AppError(error, 500));
    }
}

export const getInspirationsController = async (req, res, next) => {
    try {
        const { slug } = req.params;
        if (!slug) {
            return next(new AppError("Please provide a slug.", 400));
        }
        const inspiration = await getInspirationBySlug(slug);
        if (!inspiration) {
            return next(new AppError("Inspiration not found.", 404));
        }
        return res.status(200).json(inspiration);
    } catch (error) {
        return next(new AppError(error, 500));
    }
}