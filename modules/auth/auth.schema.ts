import { gql } from "graphql-tag";

export const authTypeDefs = gql`
  type AuthPayload {
    token: String!
    user: User!
  }

  type Mutation {
    login(username: String!, password: String!): AuthPayload
  }
`;
