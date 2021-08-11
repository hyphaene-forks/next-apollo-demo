import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BACKEND_URL } from './constants';
console.log('BACKEND_URLLLL');
console.log('BACKEND_URLLLL');
console.log('BACKEND_URLLLL');
console.log('BACKEND_URLLLL');
console.log('BACKEND_URLLLL');
console.log('BACKEND_URLLLL');
console.log({ BACKEND_URL });
const client = new ApolloClient({
	uri: BACKEND_URL,
	cache: new InMemoryCache(),
});

export default client;
