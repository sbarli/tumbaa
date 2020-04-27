import React from 'react';
import moment from 'moment';

import blogs from '../../assets/blogs';
import Nav from '../Nav/Nav';
import BlogPost from '../BlogPost/BlogPost';
import Header from '../../libs/ui/Header/Header';
import PageWrapper from '../../libs/ui/PageWrapper/PageWrapper';

const Blog = () => {
  const BlogPosts = Object.values(blogs)
    .sort((a, b) => moment(a.publishDate).isBefore(moment(b.publishDate)) ? 1 : -1)
    .map(blog => (
      <BlogPost key={blog.id} {...blog} />
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
