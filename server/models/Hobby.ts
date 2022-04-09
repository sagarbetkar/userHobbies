import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IHobby {
  passionLevel: string;
  name: string;
  year: string;
  createdAt: Date,
  modifiedAt: Date
}

const hobbySchema = new Schema<IHobby>({
  passionLevel: {
    type: String,
     enum: ["low", "medium", "high", "very high"],
    default: "low",
    required: true
  },
  name: { type: String, required: true },
  year: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now }
});

export const Hobby = model('Hobby', hobbySchema);
