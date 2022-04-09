import { Schema, Types, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IUser {
    name: string;
    hobbies: Types.ObjectId;
    createdAt: Date,
    modifiedAt: Date
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  hobbies: [{ type: Schema.Types.ObjectId, ref: 'Hobby' }],
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now }
});

export const User = model('User', userSchema);