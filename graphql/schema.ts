import { gql } from "graphql-tag";

import { userTypeDefs } from "../modules/user/user.schema";
import { authTypeDefs } from "../modules/auth/auth.schema";
import { experienceTypeDefs } from "../modules/experience/experience.schema";
import { competenceTypeDefs } from "../modules/competence/competence.schema";
import { projectTypeDefs } from "../modules/project/project.schema";

export const typeDefs = gql`
  ${userTypeDefs}
  ${authTypeDefs}
  ${experienceTypeDefs}
  ${competenceTypeDefs}
  ${projectTypeDefs}
`;
