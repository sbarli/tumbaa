import React from 'react';

import Nav from '../Nav/Nav';
import Link from '../../libs/ui/Link/Link';
import Group from '../../libs/ui/Group/Group';
import Button from '../../libs/ui/Button/Button';
import Header from '../../libs/ui/Header/Header';
import PageWrapper from '../../libs/ui/PageWrapper/PageWrapper';

import styled from 'styled-components/macro';

const Intro = styled.div`
  align-self: center;
`;

const Teaching = () => {
  return (
    <PageWrapper>
      <Intro>
        <Header size="h1" includeWrapper>Watch Me Teach!</Header>
      </Intro>
      <Group theme="vertical" center>
        <Header size="h2">JavaScript - The Hard Parts</Header>
        <Link linkTo="https://www.youtube.com/watch?v=KpGmW_P5Ygg">
          <Button theme="goldFilled" size="lg">Async, Event Loop, &amp; Promises - Part 1</Button>
        </Link>
        <Link linkTo="https://www.youtube.com/watch?v=O_BYLu0POO0">
          <Button theme="goldFilled" size="lg">Async, Event Loop, &amp; Promises - Part 2</Button>
        </Link>
      </Group>
      <Nav />
    </PageWrapper>
  );
};

export default Teaching;
