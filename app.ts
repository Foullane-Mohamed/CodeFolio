import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";

import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";

export const createApp = async () => {
  const app = express();

  app.use(cors());

  app.use(express.json());

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async ({ req, res }) => ({ req, res }), 
    })
  );

  return app;
};
