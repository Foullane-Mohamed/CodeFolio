import { gql } from "graphql-tag";

export const authTypeDefs = gql`
  type AuthUser {
    id: ID!
    username: String!
    createdAt: String
  }

  type AuthPayload {
    token: String!
  }

  type Mutation {
    register(username: String!, password: String!): AuthUser
    login(username: String!, password: String!): AuthPayload
  }
`;
