import React from 'react';

import Link from '../../libs/ui/Link/Link';
import Button from '../../libs/ui/Button/Button';
import Figure from '../../libs/ui/Figure/Figure';
import Header from '../../libs/ui/Header/Header';
import Section from '../../libs/ui/Section/Section';
import Paragraph from '../../libs/ui/Paragraph/Paragraph';

import styled from 'styled-components/macro';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  max-width: 720px;
  margin: auto;
`;

const Intro = styled.div`
  align-self: center;
`;

const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-column-gap: 25px;
  margin-bottom: 3rem;
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

const BIO = `I am an experienced software engineer with 7+ years in the industry. I enjoy everything from small bug fixes to platform architecture, and am especially passionate about mentoring other engineers. I have a particular interest in the ever-changing world of asynchronicity within the JavaScript ecosystem, and have led workshops as well as given in-depth lectures on this [and many other] concepts.
<br />
<br />
Outside of coding, I very much enjoy snowboarding, traveling, and appealing to my inner Ron Swanson (sitting in my leather chair, reading, and drinking Scotch!).`;

const Home = () => {
  return (
    <HomeWrapper>
      <Intro>
        <IntroGrid>
          <Figure
            imgSrc="headshot.jpg"
            altText="Headshot"
          />
          <div>
            <Header size="h1" includeWrapper>Hi, I'm Samantha.</Header>
            <Header size="h2">I <span role="img" aria-label="heart">❤️</span> JavaScript.</Header>
            <Header size="h3">... and teaching!</Header>
          </div>
        </IntroGrid>
        <Group>
          <Link linkTo="https://github.com/samanthasalley">
            <Button theme="blurpleOutline" size="sm">GitHub</Button>
          </Link>
          <Link linkTo="https://linkedin.com/in/samanthasalley">
            <Button theme="blurpleFilled" size="sm">LinkedIn</Button>
          </Link>
        </Group>
      </Intro>
      <Content center>
        <Paragraph isHTML={true} content={BIO} />
        <Link linkTo="/teaching">
          <Button theme="blurpleFilled" size="lg">Watch Me Teach!</Button>
        </Link>
        <Link linkTo="/blog">
          <Button theme="blurpleFilled" size="lg">Things I've Done!</Button>
        </Link>
      </Content>
    </HomeWrapper>
  );
};

export default Home;
