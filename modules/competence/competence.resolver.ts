import { competenceService } from "./competence.service";

export const competenceResolvers = {
  Query: {
    getCompetences: async () => competenceService.getCompetences(),
  },
  Mutation: {
    addCompetence: async (_: any, { input }: any) =>
      competenceService.addCompetence(input),
    updateCompetence: async (_: any, { id, input }: any) =>
      competenceService.updateCompetence(id, input),
  },
};
