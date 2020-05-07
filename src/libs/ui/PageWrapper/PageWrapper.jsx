import React from 'react';
import PropTypes from 'prop-types';

// styled components
import styled from 'styled-components/macro';
import mixins from '../styles/mixins';

const PageWrapper = styled.section(() => `
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 720px;
  margin: auto;
  width: 100%;

  ${mixins.respond.md`
    padding-top: 5rem;
  `}
`);

const Page = (props) => {
  return (
    <PageWrapper {...props}>{props.children}</PageWrapper>
  );
};

Page.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Page;
