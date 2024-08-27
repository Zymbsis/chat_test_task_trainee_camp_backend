import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import chatsRouter from './routers/chats.js';
import { env } from './utils/env.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = Number(env('PORT', '3000'));

export const startServer = () => {
  app.use(
    express.json({
      type: ['application/json', 'application/vnd.api+json'],
    }),
  );
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );
  app.use(cors());
  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });

  app.use(chatsRouter);

  app.use('*', notFoundHandler);

  app.use(errorHandler);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
