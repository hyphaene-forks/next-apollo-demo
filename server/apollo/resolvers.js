const { generateName } = require('../utils/nameGenerator');

const resolvers = {
	Query: {
		name: () => generateName(),
	},
};

module.exports = {
	resolvers,
};
