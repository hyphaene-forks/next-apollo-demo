import { generateName } from '../utils/nameGenerator';

export const resolvers = {
	Query: {
		name: () => generateName(),
	},
};
