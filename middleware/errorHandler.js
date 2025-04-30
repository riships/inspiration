import logger from "../config/winston.logger.js";

const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const status = err.status || "error";
    const message = err.message || "Internal Server Error";
    const logLevel = statusCode >= 500
        ? "error"
        : statusCode >= 400
            ? "warn"
            : "info";

    const logPayload = {
        timestamp: new Date().toISOString(),
        method: req.method,
        url: req.originalUrl,
        statusCode,
        status,
        message
    };

    logger[logLevel](logPayload);

    res.status(statusCode).json({
        success: false,
        message,
    });
};

export default errorHandler;
