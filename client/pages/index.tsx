import Link from 'next/link';
import { gql } from '@apollo/client';

import Name from '../components/Name';
import client from '../apollo-client';
import { homeHeader } from '../constants';

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

export default function Home({ nameData }): JSX.Element {
	return (
		<div>
			<h1>{homeHeader}</h1>
			Welcome, <Name data={nameData} />
			<br />
			<br />
			<Link href="/about" data-cy="nav-item">
				<a data-cy="nav-item">About</a>
			</Link>
		</div>
	);
}
