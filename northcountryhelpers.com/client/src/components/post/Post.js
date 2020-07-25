import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentForm from '../post/CommentForm';
import CommentItem from '../post/CommentItem';
import { getPost } from '../../actions/post';
import Moment from 'react-moment';

import conversation2 from '../../img/conversation2.svg';
import arrowleft from '../../img/arrow-thick-left.svg';
import { Typography, Container, Button, Divider } from '@material-ui/core';

const Post = ({
  getPost,
  post: { post },
  auth: { isAuthenticated, loading },
  match,
}) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post === null ? (
    <Container>
      <Typography
        align='center'
        style={{
          margin: '10rem auto 0 auto',
        }}
        variant='h5'
      >
        Loading...
      </Typography>
    </Container>
  ) : (
    <Container style={{ margin: '5rem auto 0 auto' }} maxWidth='md'>
      <Link to='/posts'>
        <Button variant='outlined' color='primary'>
          {' '}
          <img
            src={arrowleft}
            style={{
              height: '0.99rem',
              display: 'inline-block',
              marginRight: '0.33rem',
            }}
            alt=''
          />
          Back To Posts
        </Button>
      </Link>

      <Typography
        style={{
          margin: '2rem 0 1rem 0',
        }}
        align='center'
        variant='subtitle1'
      >
        {post.title}
      </Typography>
      <Typography align='center' variant='caption'>
        Posted on <Moment format='MM/DD/YYYY'>{post.date}</Moment> <br></br>
      </Typography>

      <Typography align='center' variant='caption'>
        {post.name && 'Name: ' + post.name} <br></br>
      </Typography>
      <Typography align='center' variant='caption'>
        {post.location && 'Location: ' + post.location} <br></br>
      </Typography>
      <Typography align='center' variant='caption'>
        {post.contact && 'Contact: ' + post.contact}
      </Typography>

      <Typography
        style={{
          margin: '2rem 0 2rem 0',
        }}
        align='center'
        variant='subtitle1'
      >
        {post.text}
      </Typography>

      <Divider />
      <Typography style={{ margin: '1rem 0 0 0' }} variant='subtitle1'>
        {' '}
        <img
          src={conversation2}
          style={{
            height: '0.99rem',
            display: 'inline-block',
            marginRight: '0.33rem',
          }}
          alt=''
        />
        Comments:
      </Typography>
      <div className='comments'>
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
      {isAuthenticated ? (
        <Container maxWidth='xs'>
          <CommentForm postId={post._id} />
        </Container>
      ) : (
        <Typography
          align='center'
          style={{ margin: '2rem 0' }}
          variant='subtitle2'
        >
          Create an <Link to='/register'>account</Link> or{' '}
          <Link to='/login'>login</Link> to comment
        </Typography>
      )}
    </Container>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPost })(Post);
