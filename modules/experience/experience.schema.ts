import { gql } from "graphql-tag";

export const experienceTypeDefs = gql`
  type Experience {
    id: ID!
    title: String!
    company: String!
    startDate: String!
    endDate: String
    description: String!
    createdAt: String
    updatedAt: String
  }

  input ExperienceInput {
    title: String!
    company: String!
    startDate: String!
    endDate: String
    description: String!
  }

  input UpdateExperienceInput {
    title: String
    company: String
    startDate: String
    endDate: String
    description: String
  }

  type Query {
    getExperiences: [Experience]
  }

  type Mutation {
    addExperience(input: ExperienceInput!): Experience
    updateExperience(id: ID!, input: UpdateExperienceInput!): Experience
    deleteExperience(id: ID!): Experience
  }
`;
