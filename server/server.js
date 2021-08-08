const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { BACKEND_PORT, BACKEND_URL } = require('./constants');
const { generateName } = require('./utils/nameGenerator');

async function startApolloServer() {
	// Construct a schema, using GraphQL schema language
	const typeDefs = gql`
		type Query {
			name: String
		}
	`;

	// Provide resolver functions for your schema fields
	const resolvers = {
		Query: {
			name: () => generateName(),
		},
	};

	const server = new ApolloServer({ typeDefs, resolvers });
	await server.start();

	const app = express();
	server.applyMiddleware({ app });

	await new Promise((resolve) => app.listen({ port: BACKEND_PORT }, resolve));
	console.log(`🚀 Server ready at ${BACKEND_URL}${server.graphqlPath}`);
	return { server, app };
}

startApolloServer();
