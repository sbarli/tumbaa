import React from 'react';
import { render } from '@testing-library/react';
import Blog from './Blog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Blog />, div);
  ReactDOM.unmountComponentAtNode(div);
});
