import createHttpError from 'http-errors';
import {
  createNewChat,
  createNewMessage,
  deleteChat,
  getAllChats,
  getChatById,
  updateChat,
} from '../services/chats.js';

export const getChatsController = async (req, res) => {
  const chats = await getAllChats();

  res.json({
    status: 200,
    message: 'Successfully found chats!',
    data: chats,
  });
};

export const getChatByIdController = async (req, res) => {
  const { chatId: _id } = req.params;
  const chat = await getChatById(_id);
  if (!chat) {
    throw createHttpError(404, 'Chat not found');
  }

  res.json({
    status: 200,
    message: `Successfully found chat with id ${_id}!`,
    data: chat,
  });
};

export const createNewChatController = async (req, res) => {
  const { firstName, lastName } = req.body;

  const newChat = await createNewChat({ firstName, lastName });

  res.status(201).json({
    status: 201,
    message: `Successfully created new chat!`,
    data: newChat,
  });
};
export const sendMessageController = async (req, res) => {
  const { chatId: _id } = req.params;
  const message = req.body;
  const newMessage = await createNewMessage(_id, message);
  if (!newMessage) {
    throw createHttpError(404, 'Chat not found');
  }
  res.status(201).json({
    status: 201,
    message: `Successfully send message!`,
    data: newMessage,
  });
};

export const deleteChatController = async (req, res) => {
  const { chatId: _id } = req.params;
  const chat = await deleteChat(_id);
  if (!chat) {
    throw createHttpError(404, 'Chat not found');
  }
  res.status(204).send();
};

export const updateChatController = async (req, res) => {
  const { chatId: _id } = req.params;
  const payload = req.body;

  const chat = await updateChat(_id, payload);
  if (!chat) {
    throw createHttpError(404, 'Chat not found');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully updated chat!`,
    data: chat,
  });
};
