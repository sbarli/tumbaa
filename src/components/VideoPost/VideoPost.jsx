import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../libs/ui/Header/Header';
import Section from '../../libs/ui/Section/Section';

import styled from 'styled-components/macro';

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const VideoPost = ({
  title,
  content,
}) => (
    <Section>
      <Header size="h3" removeMargins={['top']} center>{title}</Header>
      <Content>
        {content}
      </Content>
    </Section>
  );

VideoPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
};

export default VideoPost;
