import { Competence } from "./competence.model";

export class CompetenceService {
  async addCompetence(data: any) {
    const competence = new Competence(data);
    return competence.save();
  }

  async getCompetences() {
    return Competence.find();
  }

  async updateCompetence(id: string, data: any) {
    const competence = await Competence.findById(id);
    if (!competence) throw new Error("Competence not found");

    Object.assign(competence, data);
    return competence.save();
  }
}

export const competenceService = new CompetenceService();
