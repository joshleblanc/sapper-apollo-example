import 'isomorphic-fetch'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
console.log(fetch);
import ApolloClient from 'apollo-boost'

const client = new ApolloClient();

export default client;