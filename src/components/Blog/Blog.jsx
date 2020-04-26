import React from 'react';

import blogs from '../../assets/blogs';
import BlogPost from '../BlogPost/BlogPost';
import Header from '../../libs/ui/Header/Header';
import PageWrapper from '../../libs/ui/PageWrapper/PageWrapper';

const Blog = () => {
  const BlogPosts = Object.values(blogs)
    .map(blog => (
      <BlogPost {...blog} />
    ));
  return (
    <PageWrapper>
      <Header size="h1">Public Works</Header>
      {BlogPosts}
    </PageWrapper>
  );
};

export default Blog;
