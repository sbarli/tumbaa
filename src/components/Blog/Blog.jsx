import React from 'react';
import moment from 'moment';

import blogs from '../../assets/blogs';
import Nav from '../Nav/Nav';
import BlogPost from '../BlogPost/BlogPost';
import VideoPost from '../VideoPost/VideoPost';
import Link from '../../libs/ui/Link/Link';
import Group from '../../libs/ui/Group/Group';
import Button from '../../libs/ui/Button/Button';
import Header from '../../libs/ui/Header/Header';
import PageWrapper from '../../libs/ui/PageWrapper/PageWrapper';

import styled from 'styled-components/macro';

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  max-width: 300px;
  margin: auto;

  span {
    justify-content: center;
    margin: auto;
  }
`;

const Blog = () => {
  const BlogPosts = Object.values(blogs)
    .sort((a, b) => moment(a.publishDate).isBefore(moment(b.publishDate)) ? 1 : -1)
    .map(blog => (
      <BlogPost key={blog.id} {...blog} />
    ));
  return (
    <PageWrapper>
      <Header size="h1" removeMargins={['top']}>Public Talks &amp; Publications</Header>
      <Header size="h2" removeMargins={['top', 'bottom']}>Public Talks</Header>
      <Group center>
        <VideoPost
          title="JavaScript The Hard Parts - Async &amp; Promises"
          content={
            <ButtonGroup>
              <Link linkTo="https://www.youtube.com/watch?v=KpGmW_P5Ygg">
                <Button theme="goldFilled" size="lg">Part 1</Button>
              </Link>
              <Link linkTo="https://www.youtube.com/watch?v=O_BYLu0POO0">
                <Button theme="goldFilled" size="lg">Part 2</Button>
              </Link>
            </ButtonGroup>
          }
        />
        {/* <Header size="h3">JavaScript The Hard Parts - Recursion</Header>
        <Link linkTo="">
          <Button theme="goldFilled" size="lg">Watch Now</Button>
        </Link> */}
        <VideoPost
          title="JavaScript The Hard Parts - Closure"
          content={
            <Link linkTo="https://tumbaa.s3-us-west-1.amazonaws.com/workshop-videos/JSHP-Closure-SamanthaSalley.mp4">
              <Button theme="goldFilled" size="lg">Watch Now</Button>
            </Link>
          }
        />
        <VideoPost
          title="JavaScript The Hard Parts - Callbacks"
          content={
            <Link linkTo="https://tumbaa.s3-us-west-1.amazonaws.com/workshop-videos/JSHP-Callbacks-SamanthaSalley.mp4">
              <Button theme="goldFilled" size="lg">Watch Now</Button>
            </Link>
          }
        />
      </Group>
      <Header size="h2" removeMargins={['bottom']}>Publications</Header>
      <Group>
        {BlogPosts}
      </Group>
      <Nav />
    </PageWrapper>
  );
};

export default Blog;
