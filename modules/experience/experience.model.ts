import { Schema, model, Document } from "mongoose";

export interface IExperience extends Document {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
}

const experienceSchema = new Schema<IExperience>(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export const Experience = model<IExperience>("Experience", experienceSchema);
