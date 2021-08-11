import Link from 'next/link';
import { gql } from '@apollo/client';

import Name from '../components/Name';
import client from '../apollo-client';
import { homeHeader } from '../constants';

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
			Welcome, <Name data={nameData} />
			<br />
			<br />
			<Link href="/cards">
				<a>Cards</a>
			</Link>
			<p>
				I've detailed the though process in the
				<a href="https://github.com/hyphaene-forks/next-apollo-demo/blob/master/dev_process.md">
					dev_process.md document
				</a>
				, feel free to take a look !
			</p>
		</div>
	);
}
