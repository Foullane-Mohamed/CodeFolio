import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: ID!
    name: String!
    bio: String
    email: String!
    socialLinks: [String]
    createdAt: String
    updatedAt: String
  }

  input ProfileInput {
    name: String!
    bio: String
    email: String!
    socialLinks: [String]
  }

  input UpdateProfileInput {
    name: String
    bio: String
    email: String
    socialLinks: [String]
  }

  type Query {
    getProfil: User
  }

  type Mutation {
    addProfile(input: ProfileInput!): User
    updateProfile(input: UpdateProfileInput!): User
  }
`;
