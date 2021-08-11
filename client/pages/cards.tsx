import client from '../apollo-client';
import Card from '../components/Card';
import { CARDS_QUERY } from '../components/cards/constants';

export async function getStaticProps() {
	const data = await client.query({
		notifyOnNetworkStatusChange: true,
		query: CARDS_QUERY,
		variables: {
			offset: 0,
			limit: 10,
		},
	});
	return {
		props: { cardsContent: data },
	};
}

function CardsList({ cardsContent }) {
	if (cardsContent.loading) {
		return <div>Loading</div>;
	}

	return (
		<div className="page-container">
			<h1>Cards</h1>
			<p>
				I've detailed the though process in the
				<a href="https://github.com/hyphaene-forks/next-apollo-demo/blob/master/dev_process.md">
					dev_process.md document
				</a>
				, feel free to take a look !
			</p>

			<div className="cards-container">
				{cardsContent.data.cards.map((card) => (
					<Card
						phoneNumber={card.phoneNumber}
						name={card.name}
						email={card.email}
						address={card.address}
						key={card.id}
						avatar={card.image}
					/>
				))}
			</div>

			{/* <button className="loadMore" type="button" onClick={onLoadMore}>
				Load More
			</button> */}
		</div>
	);
}

export default function Cards({ cardsContent }) {
	return <CardsList cardsContent={cardsContent} />;
}
