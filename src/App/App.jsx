import React from 'react';

import Home from '../Home/Home';

import styled from 'styled-components/macro';

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 5rem 15rem;
  background: var(--gray-light);
`;

const App = () => {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
};

export default App;
