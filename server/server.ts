import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { BACKEND_PORT, BACKEND_URL } from './src/constants';
import { typeDefs } from './src/apollo/typeDefs';
import { resolvers } from './src/apollo/resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

async function startApolloServer() {
	await server.start();

	const app = express();
	server.applyMiddleware({ app });

	await new Promise(() => app.listen({ port: BACKEND_PORT }));
	console.log(`🚀 Server ready at ${BACKEND_URL}${server.graphqlPath}`);
	return { server, app };
}

startApolloServer();
