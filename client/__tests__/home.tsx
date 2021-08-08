import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { homeHeader } from '../constants';

import Home from '../pages/index';

describe('App', () => {
	it('renders without crashing', () => {
		const nameData = { loading: true };
		render(<Home nameData={nameData} />);
		expect(
			screen.getByRole('heading', { name: homeHeader }),
		).toBeInTheDocument();
	});
});
