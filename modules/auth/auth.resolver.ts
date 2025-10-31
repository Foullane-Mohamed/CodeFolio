import { authService } from "./auth.service";

export const authResolvers = {
  Mutation: {
    login: async (_: any, { username, password }: any) =>
      authService.login(username, password),
  },
};
