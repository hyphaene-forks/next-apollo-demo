import { generateName } from '../utils/generateName';
import { generateList } from '../utils/generateList';

const list = generateList();

type CardsQueryVariable = {
	offset?: number;
	limit?: number;
};

export function getPaginatedResultFromList(variables: CardsQueryVariable) {
	return list.slice(variables.offset, variables.limit + variables.offset);
}

export const resolvers = {
	Query: {
		name: () => generateName(),
		cards: (_, variables = { offset: 0, limit: 10 }) => {
			console.log('calling cards');
			console.log(variables);
			return getPaginatedResultFromList(variables);
		},
	},
};
