import express, { urlencoded } from 'express';
import LinkExtractorRouter from './routes/Extractor.routes.js';

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', LinkExtractorRouter);



export default app;
// Start the server