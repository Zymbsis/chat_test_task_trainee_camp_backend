import { ChatsCollection } from '../db/models/chats.js';

export const getAllChats = async () => {
  const chats = await ChatsCollection.find();
  return chats;
};

export const getChatById = async (chatId) => {
  const chat = await ChatsCollection.findById(chatId);
  return chat;
};

export const createNewChat = async (payload) => {
  const newChat = ChatsCollection.create(payload);
  return newChat;
};

export const deleteChat = async (_id) => {
  const chat = await ChatsCollection.findByIdAndDelete({ _id });
  return chat;
};
