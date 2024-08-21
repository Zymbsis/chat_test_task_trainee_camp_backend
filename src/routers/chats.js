import { Router } from 'express';
import {
  getChatByIdController,
  getChatsController,
} from '../controllers/chats.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/chats', ctrlWrapper(getChatsController));

router.get('/chats/:chatId', ctrlWrapper(getChatByIdController));

export default router;
