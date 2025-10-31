import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  bio: string;
  email: string;
  socialLinks: string[];
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    bio: { type: String },
    email: { type: String, required: true, unique: true },
    socialLinks: [{ type: String }],
  },
  { timestamps: true }
);

export const User = model<IUser>("User", userSchema);
