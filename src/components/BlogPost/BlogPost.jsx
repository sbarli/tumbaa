import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../libs/ui/Link/Link';
import Group from '../../libs/ui/Group/Group';
import Header from '../../libs/ui/Header/Header';
import Section from '../../libs/ui/Section/Section';

const BlogPost = ({
  id,
  title,
  content,
  linkTo,
}) => (
  <Group>
    <Section key={id}>
      <Header size="h2" removeMarginTop>{title}</Header>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      {linkTo && <Link linkTo={linkTo}>Read More</Link>}
    </Section>
  </Group>
  );

BlogPost.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
};

export default BlogPost;
