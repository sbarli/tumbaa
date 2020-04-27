import React from 'react';

import blogs from '../../assets/blogs';
import Nav from '../Nav/Nav';
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
      <Nav />
    </PageWrapper>
  );
};

export default Blog;
