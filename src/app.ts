import express from 'express';
import cors from 'cors';
import Logger from './config/logger';
import { customErrorMiddleware } from './middlewares/custom-error.middleware';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(Logger.requests);

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: ['Accept', 'Content-Type', 'Authorization'],
  }),
);

app.get('/', (_req, res) => {
  res.json({
    message: 'Welcome to the API',
  });
});

app.use(customErrorMiddleware);

export { app };
