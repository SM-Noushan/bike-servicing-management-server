import cors from 'cors';
import notFound from './app/modules/middlewares/notFound';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/modules/middlewares/globalErrorHandler';

const app: Application = express();
app.use(cors());

// parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use('/api');

app.get('/', async (req: Request, res: Response) => {
  res.send('Server is running successfully');
});

// global error handler
app.use(globalErrorHandler);
// not found route handler
app.use(notFound);

export default app;
