import { Schema, model, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [{ type: String, required: true }],
    link: { type: String },
  },
  { timestamps: true }
);

export const Project = model<IProject>("Project", projectSchema);
