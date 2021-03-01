import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import router from './routes';
import { AppError } from './errors/AppError';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message,
    })
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error: ${error}`,
  });
});

app.listen(3333, () => {
  console.log(`
  ---------------------------------
  
  Wolf Server started on port 3333
  🐺 🤟
  
  ---------------------------------
  `)
})





