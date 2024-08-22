import { model, Schema } from 'mongoose';

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
    messages: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ChatsCollection = model('chats', chatsSchema);
