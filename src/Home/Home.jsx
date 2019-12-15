import React from 'react';

import Link from '../libs/ui/Link/Link';
import Button from '../libs/ui/Button/Button';
import Header from '../libs/ui/Header/Header';
import Section from '../libs/ui/Section/Section';
import Paragraph from '../libs/ui/Paragraph/Paragraph';

import styled from 'styled-components/macro';

const HomeWrapper = styled.div`
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
  margin-top: 3rem;
  ${center ? 'text-align: center;' : ''}
`);

const Home = () => {
  return (
    <HomeWrapper>
      <Intro>
        <Header size="h1" includeWrapper>Hi, I'm Samantha.</Header>
        <Header size="h2">I ❤️ JavaScript.</Header>
        <Header size="h3">... and teaching!</Header>
        <Group>
          <Link linkTo="https://github.com/samanthasalley">
            <Button theme="blurple" size="sm">GitHub</Button>
          </Link>
          <Link linkTo="https://linkedin.com/in/samanthasalley">
            <Button theme="blurple" size="sm">LinkedIn</Button>
          </Link>
        </Group>
      </Intro>
      <Content center>
        <Link linkTo="https://www.youtube.com/watch?v=ssz-pz_h25E">
          <Button theme="gold" size="lg">Watch Me Teach!</Button>
        </Link>
      </Content>
    </HomeWrapper>
  );
};

export default Home;
