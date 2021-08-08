import Link from 'next/link';
import { gql } from '@apollo/client';

import Name from '../components/Name';
import client from '../apollo-client';

export async function getStaticProps() {
	const data = await client.query({
		query: gql`
			query name {
				name
			}
		`,
	});

	return {
		props: { nameData: data },
	};
}

const Home = ({ nameData }) => {
	return (
		<div>
			Welcome, <Name data={nameData} />
			<br />
			<br />
			<Link href="/about">
				<a>About</a>
			</Link>
		</div>
	);
};

export default Home;
