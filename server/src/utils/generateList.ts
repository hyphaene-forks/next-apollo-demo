import faker from 'faker';

type Address = {
	city: string;
	street: string;
	zipCode: string;
};

type ListItem = {
	name: string;
	address: Address;
	phoneNumber: string;
	email: string;
	image: string;
	avatar: string;
	imageUrl: string;
};

type IdListItem = ListItem & { id: number };

export function generateListItem(): ListItem {
	const name = faker.fake('{{name.firstName}} {{name.lastName}}');

	const address: Address = {
		city: faker.address.city(),
		street: faker.address.streetAddress(),
		zipCode: faker.address.zipCode(),
	};

	const phoneNumber = faker.phone.phoneNumber();
	const image = faker.image.image();
	const avatar = faker.image.avatar();
	const imageUrl = faker.image.imageUrl();
	const email = faker.internet.email();

	return {
		name,
		address,
		phoneNumber,
		image,
		avatar,
		imageUrl,
		email,
	};
}

export function generateList(): IdListItem[] {
	const itemsList = Array.from(new Array(2000)).map((_, i) => {
		return { ...generateListItem(), id: i + 1 };
	});
	return itemsList;
}
