import { gql } from '@apollo/client';

export const CARDS_QUERY = gql`
	query CardsContent($offset: Int!, $limit: Int!) {
		cards(offset: $offset, limit: $limit) {
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
