import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import Link from '../../libs/ui/Link/Link';
import Header from '../../libs/ui/Header/Header';
import Section from '../../libs/ui/Section/Section';
import Paragraph from '../../libs/ui/Paragraph/Paragraph';

const BlogPost = ({
  id,
  title,
  linkTo,
  content,
  publishDate,
}) => (
    <Section>
      <Header size="h3" removeMargins={['top', 'bottom']} center>{title}</Header>
      <Paragraph content={`<strong>${moment(publishDate).format('MMMM DD YYYY')}</strong>`} isHTML />
      <div dangerouslySetInnerHTML={{ __html: content }} />
      {linkTo && <Link linkTo={linkTo}>Read More</Link>}
    </Section>
  );

BlogPost.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
};

export default BlogPost;
