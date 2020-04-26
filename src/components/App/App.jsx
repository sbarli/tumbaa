import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from '../Home/Home';
import Teaching from '../Teaching/Teaching';
import Blog from '../Blog/Blog';

import styled from 'styled-components/macro';

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 5rem 15rem;
  background: var(--gray-light);
`;

const App = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/teaching" component={Teaching} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </Wrapper>
  );
};

export default App;