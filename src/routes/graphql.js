import { ApolloServer, gql } from 'apollo-server-micro';
const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello(parent, args, context) {
      return 'Hello World!';
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const handler = apolloServer.createHandler();

export async function get(req, res, next) {
	handler(req, res);
} 

export async function post(req, res, next) {
	handler(req, res);
}
