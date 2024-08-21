import createHttpError from 'http-errors';
import { getAllChats, getChatById } from '../services/chats.js';
import mongoose from 'mongoose';

export const getChatsController = async (req, res) => {
  const chats = await getAllChats();

  res.json({
    status: 200,
    message: 'Successfully found chats!',
    data: chats,
  });
};

export const getChatByIdController = async (req, res) => {
  const { chatId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(chatId)) {
    throw createHttpError(404, 'Chat not found');
  }

  const chat = await getChatById(chatId);
  if (!chat) {
    throw createHttpError(404, 'Chat not found');
  }

  res.json({
    status: 200,
    message: `Successfully found chat with id ${chatId}!`,
    data: chat,
  });
};
