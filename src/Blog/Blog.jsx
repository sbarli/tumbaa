import React from 'react';

import blogs from '../assets/blogs';
import BlogPost from '../BlogPost/BlogPost';
import Header from '../libs/ui/Header/Header';

import styled from 'styled-components/macro';

const Blog = () => {
  const BlogPosts = Object.values(blogs)
    .map(blog => (
      <BlogPost {...blog} />
    ));
  return (
    <div>
      <Header size="h1">Public Works</Header>
      {BlogPosts}
    </div>
  );
};

export default Blog;
