import { userResolvers } from "../modules/user/user.resolver";
import { experienceResolvers } from "../modules/experience/experience.resolver";

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...experienceResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...experienceResolvers.Mutation,
  },
};
