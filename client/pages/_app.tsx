import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import '../components/card.scss';
import '../pages/cards.scss';

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
