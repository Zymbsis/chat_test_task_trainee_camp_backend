import mongoose from 'mongoose';
import { env } from '../utils/env.js';
import { USER, PASSWORD, URL, DB } from '../constants/mongoDbEnv.js';

export const initMongoDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${env(USER)}:${env(PASSWORD)}@${env(URL)}/${env(
        DB,
      )}?retryWrites=true&w=majority`,
    );
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
};
