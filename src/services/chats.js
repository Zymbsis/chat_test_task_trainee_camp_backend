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

export const updateChat = async (_id, payload, options) => {
  const rawResult = await ChatsCollection.findOneAndUpdate({ _id }, payload, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });
  if (!rawResult || !rawResult.value) return null;
  return {
    chat: rawResult.value,
  };
};
