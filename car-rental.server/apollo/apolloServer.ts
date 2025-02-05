import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { Application, json } from "express";
import { carResolvers } from "../graphql/resolvers/car.resolvers";
import { carTypeDefs } from "../graphql/typeDefs/car.typeDefs";

export async function startApolloServer(app: Application) {
  const typeDefs = [carTypeDefs];
  const resolvers = [carResolvers];

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const apolloServer = new ApolloServer({
    schema,
  });

  await apolloServer.start();

  app.use("/graphql", json(), expressMiddleware(apolloServer));
}
