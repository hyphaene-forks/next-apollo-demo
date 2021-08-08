const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { BACKEND_PORT, BACKEND_URL } = require('./constants');
const { typeDefs } = require('./apollo/typeDefs');
const { resolvers } = require('./apollo/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

async function startApolloServer() {
	await server.start();

	const app = express();
	server.applyMiddleware({ app });

	await new Promise((resolve) => app.listen({ port: BACKEND_PORT }, resolve));
	console.log(`🚀 Server ready at ${BACKEND_URL}${server.graphqlPath}`);
	return { server, app };
}

startApolloServer();
