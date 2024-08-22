import { Router } from 'express';
import {
  createNewChatController,
  deleteChatController,
  getChatByIdController,
  getChatsController,
} from '../controllers/chats.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/chats', ctrlWrapper(getChatsController));

router.get('/chats/:chatId', ctrlWrapper(getChatByIdController));

router.post('/chats', ctrlWrapper(createNewChatController));

router.delete('/chats/:chatId', ctrlWrapper(deleteChatController));

export default router;
