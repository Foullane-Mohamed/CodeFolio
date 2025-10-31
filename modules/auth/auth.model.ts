import { Schema, model, Document } from "mongoose";

export interface IUserAuth extends Document {
  username: string;
  password: string;
}

const authSchema = new Schema<IUserAuth>(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const AuthUser = model<IUserAuth>("AuthUser", authSchema);
