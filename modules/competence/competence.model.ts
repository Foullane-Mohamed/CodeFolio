import { Schema, model, Document } from "mongoose";

export interface ICompetence extends Document {
  name: string;
  level: string;
  description?: string;
}

const competenceSchema = new Schema<ICompetence>(
  {
    name: { type: String, required: true },
    level: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

export const Competence = model<ICompetence>("Competence", competenceSchema);
