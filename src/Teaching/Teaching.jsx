import React from 'react';

import Link from '../libs/ui/Link/Link';
import Button from '../libs/ui/Button/Button';
import Header from '../libs/ui/Header/Header';

import styled from 'styled-components/macro';

const TeachingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
`;

const Intro = styled.div`
  align-self: center;
`;

const Group = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Content = styled.div(({ center }) => `
  display: flex;
  flex-direction: column;
  ${center ? 'align-items: center;' : ''}

  > * {
    margin-top: 3rem;
  }

  > :last-child {
    margin-bottom: 3rem;
  }
`);

const Teaching = () => {
  return (
    <TeachingWrapper>
      <Intro>
        <Header size="h1" includeWrapper>Watch Me Teach!</Header>
      </Intro>
      <Content center>
        <Header size="h2">JavaScript: The Hard Parts</Header>
        <Link linkTo="https://www.youtube.com/watch?v=KpGmW_P5Ygg">
          <Button theme="goldFilled" size="lg">Async, Event Loop, &amp; Promises - Part 1</Button>
        </Link>
        <Link linkTo="https://www.youtube.com/watch?v=O_BYLu0POO0">
          <Button theme="goldFilled" size="lg">Async, Event Loop, &amp; Promises - Part 2</Button>
        </Link>
      </Content>
    </TeachingWrapper>
  );
};

export default Teaching;
