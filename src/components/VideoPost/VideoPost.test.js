import React from 'react';
import { render } from '@testing-library/react';
import VideoPost from './VideoPost';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoPost />, div);
  ReactDOM.unmountComponentAtNode(div);
});
