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
		avatar: String
		imageUrl: String
	}
	type Query {
		name: String
		cards(offset: Int, limit: Int): [CardContent]
		cardsPoc: [Int]
	}
`;
