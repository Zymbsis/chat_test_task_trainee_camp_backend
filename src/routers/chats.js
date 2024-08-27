import { Router } from 'express';
import {
  createNewChatController,
  deleteChatController,
  getChatByIdController,
  getChatsController,
  sendMessageController,
  updateChatController,
} from '../controllers/chats.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middleware/validateBody.js';
import {
  createChatSchema,
  messageSchema,
  updateChatSchema,
} from '../validation/chat.js';
import { isValidId } from '../middleware/isValidId.js';

const router = Router();

router.get('/chats', ctrlWrapper(getChatsController));

router.get('/chats/:chatId', isValidId, ctrlWrapper(getChatByIdController));

router.post(
  '/chats',
  validateBody(createChatSchema),
  ctrlWrapper(createNewChatController),
);
router.post(
  '/chats/:chatId',
  isValidId,
  validateBody(messageSchema),
  ctrlWrapper(sendMessageController),
);

router.patch(
  '/chats/:chatId',
  isValidId,
  validateBody(updateChatSchema),
  ctrlWrapper(updateChatController),
);

router.delete('/chats/:chatId', isValidId, ctrlWrapper(deleteChatController));

export default router;
