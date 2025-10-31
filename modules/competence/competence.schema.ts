import { gql } from "graphql-tag";

export const competenceTypeDefs = gql`
  type Competence {
    id: ID!
    name: String!
    level: String!
    description: String
    createdAt: String
    updatedAt: String
  }

  input CompetenceInput {
    name: String!
    level: String!
    description: String
  }

  input UpdateCompetenceInput {
    name: String
    level: String
    description: String
  }

  type Query {
    getCompetences: [Competence]
  }

  type Mutation {
    addCompetence(input: CompetenceInput!): Competence
    updateCompetence(id: ID!, input: UpdateCompetenceInput!): Competence
  }
`;
