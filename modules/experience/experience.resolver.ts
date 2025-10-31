import { experienceService } from "./experience.service";

export const experienceResolvers = {
  Query: {
    getExperiences: async () => experienceService.getExperiences(),
  },
  Mutation: {
    addExperience: async (_: any, { input }: any) =>
      experienceService.addExperience(input),
    updateExperience: async (_: any, { id, input }: any) =>
      experienceService.updateExperience(id, input),
    deleteExperience: async (_: any, { id }: any) =>
      experienceService.deleteExperience(id),
  },
};
