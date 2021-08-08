import { generateName } from '../utils/generateName';
import { generateList } from '../utils/generateList';

export const resolvers = {
	Query: {
		name: () => generateName(),
		cards: () => generateList(),
	},
};
