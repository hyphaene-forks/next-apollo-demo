import { gql } from 'apollo-server-express';

export const typeDefs = gql`
	type Address {
		city: String
		street: String
		zipCode: String
	}

	type CardContent {
		id: Int
		name: String
		email: String
		phoneNumber: String
		address: Address
		image: String
	}
	type Query {
		name: String
		cards: [CardContent]
		cardsPoc: [Int]
	}
`;
