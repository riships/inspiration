import express, { urlencoded } from 'express';
import LinkExtractorRouter from './routes/Extractor.routes.js';
import InspirationsRouter from './routes/Inspirations.routes.js';
import errorHandler from './middleware/errorHandler.js';
import requestLogger from './middleware/requestLogger.js';

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(requestLogger);

app.use('/api', LinkExtractorRouter);
app.use('/api', InspirationsRouter);


app.use(errorHandler);



export default app;
// Start the server