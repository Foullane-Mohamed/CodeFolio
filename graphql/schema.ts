import { gql } from "graphql-tag";
import { userTypeDefs } from "../modules/user/user.schema";
import { experienceTypeDefs } from "../modules/experience/experience.schema";

export const typeDefs = gql`
  ${userTypeDefs}
  ${experienceTypeDefs}
`;
