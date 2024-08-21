import { initMongoDB } from './db/initMongoDb.js';
import { startServer } from './server.js';

(async () => {
  await initMongoDB();
  startServer();
})();
