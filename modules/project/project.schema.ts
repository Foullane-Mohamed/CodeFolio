import { gql } from "graphql-tag";

export const projectTypeDefs = gql`
  type Project {
    id: ID!
    title: String!
    description: String!
    technologies: [String!]!
    link: String
    createdAt: String
    updatedAt: String
  }

  input ProjectInput {
    title: String!
    description: String!
    technologies: [String!]!
    link: String
  }

  input UpdateProjectInput {
    title: String
    description: String
    technologies: [String!]
    link: String
  }

  type Query {
    getProjects: [Project]
  }

  type Mutation {
    addProject(input: ProjectInput!): Project
    updateProject(id: ID!, input: UpdateProjectInput!): Project
    deleteProject(id: ID!): Project
  }
`;
