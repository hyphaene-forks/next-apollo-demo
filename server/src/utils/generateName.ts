import faker from 'faker';

export function generateName(): string {
	return faker.name.findName();
}
