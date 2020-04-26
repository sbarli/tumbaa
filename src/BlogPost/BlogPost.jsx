import React from 'react';
import PropTypes from 'prop-types';

import Header from '../libs/ui/Header/Header';
import Link from '../libs/ui/Link/Link';

import styled from 'styled-components/macro';

const BlogPost = ({
  id,
  title,
  content,
  linkTo,
}) => (
    <div key={id}>
      <Header size="h2">{title}</Header>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      {linkTo && <Link linkTo={linkTo}>Read More</Link>}
    </div>
  );

BlogPost.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
};

export default BlogPost;
