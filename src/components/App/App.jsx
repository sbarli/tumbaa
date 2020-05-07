import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from '../Home/Home';
import Blog from '../Blog/Blog';

import styled from 'styled-components/macro';
import mixins from '../../libs/ui/styles/mixins';

const Wrapper = styled.div`
  min-height: 100vh;
  background: var(--gray-light);
  h1 {
    font-size: 3.8rem;
    ${mixins.respond.md`
      font-size: 4.8rem;
    `}
  }
  h2 {
    font-size: 3rem;
    ${mixins.respond.md`
      font-size: 3.6rem;
    `}
  }
  h3 {
    font-size: 2.5rem;
    ${mixins.respond.md`
      font-size: 2.8rem;
    `}
  }
  p {
    font-size: 1.4rem;
    ${mixins.respond.md`
      font-size: 1.6rem;
    `}
  }
  img {
    max-width: 200px;
    ${mixins.respond.md`
      max-width: unset;
    `}
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
        <Route exact path={process.env.PUBLIC_URL + "/blog"} component={Blog} />
      </Switch>
    </Wrapper>
  );
};

export default App;
