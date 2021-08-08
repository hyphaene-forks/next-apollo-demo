const faker = require('faker');

function generateName() {
	return faker.name.findName();
}

module.exports = { generateName };
