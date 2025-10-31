import { userResolvers } from "../modules/user/user.resolver";
import { authResolvers } from "../modules/auth/auth.resolver";
import { experienceResolvers } from "../modules/experience/experience.resolver";
import { competenceResolvers } from "../modules/competence/competence.resolver";
import { projectResolvers } from "../modules/project/project.resolver";

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...experienceResolvers.Query,
    ...competenceResolvers.Query,
    ...projectResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...experienceResolvers.Mutation,
    ...competenceResolvers.Mutation,
    ...projectResolvers.Mutation,
    ...authResolvers.Mutation,
  },
};
