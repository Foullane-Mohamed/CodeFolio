import { userService } from "./user.service";

export const userResolvers = {
  Query: {
    getProfil: async () => userService.getProfil(),
  },
  Mutation: {
    addProfile: async (_: any, { input }: any) => userService.addProfile(input),
    updateProfile: async (_: any, { input }: any) => userService.updateProfile(input),
  },
};
