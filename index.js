import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./schema/resolvers/index.js";
import { typeDefs } from "./schema/typedefs/index.js";
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  //  it will be passed to every resolver  we can get from any resolver  we also have req , res in it
  // we can get header from it from req.header
  context: ({ req, res }) => {
    return { req, res };
  },
});

console.log(`🚀  Server ready at: ${url}`);
