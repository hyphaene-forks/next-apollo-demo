import Link from 'next/link';
import { gql } from '@apollo/client';

import Name from '../components/Name';
import client from '../apollo-client';
import { BACKEND_URL, homeHeader } from '../constants';

export async function getServerSideProps() {
	try {
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
	} catch (error) {
		return {
			props: { nameData: { loading: true } },
		};
	}
}

export default function Home({ nameData }): JSX.Element {
	return (
		<div>
			<h1>{homeHeader}</h1>
			<h1>BACKEND_URL: {BACKEND_URL}</h1>
			Welcome, <Name data={nameData} />
			<br />
			<br />
			<Link href="/about" data-cy="nav-item">
				<a data-cy="nav-item">About</a>
			</Link>
		</div>
	);
}
