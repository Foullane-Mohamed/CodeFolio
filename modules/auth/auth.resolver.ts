import { authService } from "./auth.service";

export const authResolvers = {
  Mutation: {
    register: async (_: any, { username, password }: any) =>
      authService.register(username, password),
    login: async (_: any, { username, password }: any) =>
      authService.login(username, password),
  },
};
