import winston from "winston";

const { combine, timestamp, label, printf } = winston.format;

// Custom log format
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

// Create the logger
const logger = winston.createLogger({
    level: 'info', // Adjust log level as needed
    format: combine(
        label({ label: 'inspiration' }),  // Set a label for your app/service
        timestamp(),                // Add timestamp to logs
        myFormat                    // Use the custom format
    ),
    transports: [
        new winston.transports.Console(), // Output to console
        new winston.transports.File({ filename: 'app.log' })
    ]
});

export default logger;
// Example usage in another module