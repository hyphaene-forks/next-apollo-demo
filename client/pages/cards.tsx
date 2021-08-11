import { gql } from '@apollo/client';
import client from '../apollo-client';
import Card from '../components/Card';

const CARDS_QUERY = gql`
	query CardsContent {
		cards {
			id
			name
			image
			imageUrl
			avatar
			address {
				city
				zipCode
				street
			}
			phoneNumber
			email
		}
	}
`;

export async function getStaticProps() {
	const data = await client.query({
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

export default function CardsList({ cardsContent }) {
	if (cardsContent.loading) {
		return <div>Loading</div>;
	}
	console.log(cardsContent.data.cards[0]);
	return (
		<div className="page-container">
			<h1>Cards</h1>

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

			<button className="loadMore" type="button">
				Load More
			</button>
		</div>
	);
}
