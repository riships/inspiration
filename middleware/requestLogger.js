import logger from '../config/winston.logger.js';

const requestLogger = (req, res, next) => {
    const logMessage = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`;
    logger.info(logMessage);
    next();
};

export default requestLogger;
