import { generateName } from '../utils/generateName';
import { generateList } from '../utils/generateList';

const list = generateList();

export const resolvers = {
	Query: {
		name: () => generateName(),
		cards: () => list,
	},
};
