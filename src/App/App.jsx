import React from 'react';

import Header from '../libs/ui/Header/Header';
import Section from '../libs/ui/Section/Section';
import Paragraph from '../libs/ui/Paragraph/Paragraph';

import styled from 'styled-components/macro';

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 5rem 15rem;
  background: var(--gray-light);
`;

const App = () => {
  return (
    <Wrapper>
      <Header size="h1" includeWrapper>Samantha Salley</Header>
      <Header size="h2">Subheader</Header>
      <Header size="h3">Title</Header>
      <Section>
        <Paragraph>This is a paragraph inside a section</Paragraph>
      </Section>
      <div>
        <small>This is small text</small>
      </div>
    </Wrapper>
  );
};

export default App;
