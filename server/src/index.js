import { GraphQLServer, PubSub } from "graphql-yoga";
import db from "./db";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import Subscription from "./resolvers/Subscription";
import Conversation from "./resolvers/Conversation";
import Message from "./resolvers/Message";

const PORT = process.env.PORT || 4000;
const HOST = "0.0.0.0";

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    Subscription,
    Conversation,
    Message
  },
  context: {
    db,
    pubsub
  }
});

const options = {
  port: PORT,
  host: HOST,
  endpoint: "/graphql",
  subscriptions: "/graphql",
  playground: "/"
};

server.start(options, ({ port }) => console.log(`Server started, listening on port ${port} for incoming requests.`));
