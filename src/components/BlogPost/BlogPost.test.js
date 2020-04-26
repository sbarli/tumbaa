import React from 'react';
import { render } from '@testing-library/react';
import BlogPost from './BlogPost';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlogPost />, div);
  ReactDOM.unmountComponentAtNode(div);
});
