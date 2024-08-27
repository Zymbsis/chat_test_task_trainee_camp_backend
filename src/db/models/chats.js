import { model, Schema } from 'mongoose';

const messageSchema = new Schema({
  from: {
    type: String,
    enum: ['me', 'contact'],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const chatsSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    messages: [messageSchema],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ChatsCollection = model('chats', chatsSchema);
