import React from 'react';
import { render } from '@testing-library/react';
import Nav from './Nav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Nav />, div);
  ReactDOM.unmountComponentAtNode(div);
});
