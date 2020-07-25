import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getPosts } from '../../actions/post';
import arrowleft from '../../img/arrow-thick-left.svg';
import station from '../../img/station.svg';
import PostItem from './PostItem';
import { Typography, Container, Grid, Button } from '@material-ui/core';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (posts.length === 0 && !loading) {
    return (
      <Container
        maxWidth='md'
        style={{
          margin: '5rem auto 0 auto',
        }}
      >
        <Link to='/'>
          <Button variant='contained'>
            <img
              src={arrowleft}
              style={{
                height: '0.99rem',
                display: 'inline-block',
                marginRight: '0.33rem',
              }}
              alt=''
            />
            Back Home
          </Button>
        </Link>
        <Typography
          style={{
            margin: '3rem 0 3rem 0',
          }}
          align='center'
          variant='h5'
          className='landing-heading'
        >
          There are no current help requests
        </Typography>
        <div align='center'>
          <Link to='/addpost'>
            <Button color='primary' variant='contained'>
              <img
                src={station}
                style={{
                  height: '0.99rem',
                  display: 'inline-block',
                  marginRight: '0.33rem',
                }}
                alt=''
              />{' '}
              Post a help request
            </Button>
          </Link>
        </div>
      </Container>
    );
  }

  return loading ? (
    <Container>
      <Typography
        style={{
          margin: '7.5rem 0 0 0',
        }}
        align='center'
        variant='h5'
      >
        Loading...
      </Typography>
    </Container>
  ) : (
    <Container style={{ margin: '5rem auto 0 auto' }} maxWidth='lg'>
      <div align='center'>
        <Typography
          style={{ margin: '0 0 2rem 0' }}
          className='landing-heading'
          align='center'
          variant='h5'
        >
          Help Requests
        </Typography>
        <Link style={{ margin: '1.5rem 0' }} to='/addpost'>
          <Button color='primary' variant='contained'>
            <img
              src={station}
              style={{
                height: '0.99rem',
                display: 'inline-block',
                marginRight: '0.33rem',
              }}
              alt=''
            />{' '}
            Post a help request
          </Button>
        </Link>
      </div>
      <Grid style={{ margin: '1.5rem 0' }} wrap='wrap' container spacing={1}>
        {posts.map((post) => (
          <Grid item key={post._id} sm={6} md={4}>
            <PostItem post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
