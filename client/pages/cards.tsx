import { gql } from '@apollo/client';
import client from '../apollo-client';

export async function getStaticProps() {
	const data = await client.query({
		query: gql`
			query CardsContent {
				cards {
					id
					name
					image
					address {
						city
						zipCode
						street
					}
					phoneNumber
					email
				}
			}
		`,
	});

	return {
		props: { cardsContent: data },
	};
}

export default function CardsList({ cardsContent }) {
	if (cardsContent.loading) {
		return <div>Loading</div>;
	}

	return (
		<div className="page-container">
			<h1>Cards</h1>

			<div>
				{cardsContent.data.cards.map((card) => (
					<div key={card.id}>
						<div>ID: {card.id}</div>
						<div>{card.name}</div>
						<div>{card.phoneNumber}</div>
					</div>
				))}
			</div>
		</div>
	);
}
