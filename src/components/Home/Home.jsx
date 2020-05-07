import React from 'react';

import Link from '../../libs/ui/Link/Link';
import Group from '../../libs/ui/Group/Group';
import Button from '../../libs/ui/Button/Button';
import Figure from '../../libs/ui/Figure/Figure';
import Header from '../../libs/ui/Header/Header';
import Paragraph from '../../libs/ui/Paragraph/Paragraph';
import PageWrapper from '../../libs/ui/PageWrapper/PageWrapper';

import styled from 'styled-components/macro';
import mixins from '../../libs/ui/styles/mixins';

const IntroGrid = styled.div`
  display: flex;
  flex-direction: column;
  
  ${mixins.respond.md`
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    grid-column-gap: 25px;
    margin-bottom: 3rem;
  `}
`;

const HeaderGroup = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const BIO = `I am an experienced software engineer with 6+ years in the industry. I enjoy everything from small bug fixes to platform architecture, and am especially passionate about mentoring other developers. I have a particular interest in the ever-changing world of asynchronicity within the JavaScript ecosystem, and have led workshops as well as given in-depth lectures on this [and many other] concepts.
<br />
<br />
Outside of coding, I very much enjoy snowboarding, traveling, and appealing to my inner Ron Swanson (sitting in my leather chair, reading, and drinking Scotch).`;

const Home = () => {
  return (
    <PageWrapper>
      <IntroGrid>
        <Figure
          imgSrc="headshot.jpg"
          altText="Headshot"
        />
        <HeaderGroup>
          <Header size="h1" removeMargins={['bottom']}>Hi, I'm Samantha.</Header>
          <Header size="h2" removeMargins={['bottom']}>I <span role="img" aria-label="heart">❤️</span> JavaScript.</Header>
          <Header size="h3">... and teaching!</Header>
        </HeaderGroup>
      </IntroGrid>
      <Group theme="horizontal">
        <Link linkTo="https://github.com/samanthasalley">
          <Button theme="blurpleOutline" size="sm">GitHub</Button>
        </Link>
        <Link linkTo="https://linkedin.com/in/samanthasalley">
          <Button theme="blurpleOutline" size="sm">LinkedIn</Button>
        </Link>
        <Link linkTo="mailto:samanthasalley+website@gmail.com">
          <Button theme="blurpleOutline" size="sm">Email</Button>
        </Link>
      </Group>
      <Paragraph isHTML={true} content={BIO} />
      <Group theme="horizontal">
        <Link linkTo="/blog">
          <Button theme="blurpleFilled" size="lg">Public Talks &amp; Publications</Button>
        </Link>
      </Group>
    </PageWrapper>
  );
};

export default Home;
