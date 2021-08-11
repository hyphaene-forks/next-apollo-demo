import { generateName } from '../utils/generateName';

describe('nameGenerator', () => {
	it('should generate a string', () => {
		const name = generateName();
		expect(typeof name).toBe('string');
	});
	it('should generate a lengthy string', () => {
		const name = generateName();
		expect(name.length).toBeTruthy();
	});
});

generateName();
