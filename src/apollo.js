import 'isomorphic-fetch'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
	uri: (process.env.PROTOCOL || "http") + "://" + (process.env.HOST || "localhost") + (":" + (process.env.PORT || 80)) + "/graphql"
});

export default client;
