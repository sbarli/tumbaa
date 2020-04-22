import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders hi header', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Hi, I'm Samantha./i);
  expect(linkElement).toBeInTheDocument();
});
