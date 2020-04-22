import React from 'react';
import { render } from '@testing-library/react';
import Teaching from './Teaching';

test('renders header', () => {
  const { getByText } = render(<Teaching />);
  const linkElement = getByText(/watch me teach/i);
  expect(linkElement).toBeInTheDocument();
});
