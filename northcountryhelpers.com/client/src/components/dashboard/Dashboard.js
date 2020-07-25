import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount } from '../../actions/profile';
import { getUserPosts } from '../../actions/post';
import PostItem from '../posts/PostItem';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const Dashboard = ({
  deleteAccount,
  getUserPosts,
  auth: { user },
  post: { userposts },
}) => {
  useEffect(() => {
    getUserPosts(user._id);
  }, [getUserPosts, user._id]);

  return (
    <div align='center'>
      <Container component='main' maxWidth='md'>
        <Typography
          align='center'
          className='landing-heading'
          style={{ margin: '0 0 1.5rem 0' }}
          variant='h5'
        >
          Dashboard
        </Typography>
        <Grid container justify='center' spacing={3}>
          <Grid item sm={12} md={6}>
            <Card>
              <CardContent>
                Do you want to volunteer your time, talents or efforts for those
                in need in your community? Create a helper profile and be listed
                on the front page!
              </CardContent>
              <CardActions>
                <Link to='/editprofile'>
                  <Button style={{ color: 'blue' }}>Edit Helper Profile</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={12} md={6}>
            <Card>
              <CardContent>
                Are you in need and would like to request help? You can post a
                help request! Please carefully consider your request and always
                respect the time of others.
              </CardContent>
              <CardActions>
                <Link to='/addpost'>
                  <Button style={{ color: 'blue' }}>Post a help request</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='sm'>
        {userposts.length !== 0 && (
          <Typography
            style={{ margin: '2rem 0' }}
            align='left'
            className='landing-heading'
            variant='h6'
          >
            My Help Requests
          </Typography>
        )}
        {userposts.map((post) => (
          <div key={post._id} style={{ margin: '1rem 0' }}>
            <PostItem post={post} showDelete={true} showEdit={true} />
          </div>
        ))}
        <Divider />
        <Button
          style={{ margin: '2rem 0 3rem 0' }}
          variant='contained'
          color='secondary'
          onClick={() => deleteAccount()}
        >
          delete profile and account
        </Button>

        <Typography
          style={{ display: 'block', margin: '0 0 2rem 0' }}
          variant='subtitle1'
        >
          Do you have an issue with your account? Please email me directly for
          help:{' '}
          <a href='mailto:tim@northernreachnh.com'>tim@northernreachnh.com</a>
        </Typography>
      </Container>
    </div>
  );
};

Dashboard.propTypes = {
  deleteAccount: PropTypes.func.isRequired,
  getUserPosts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth,
  userposts: state.posts,
});

export default connect(mapStateToProps, { deleteAccount, getUserPosts })(
  Dashboard
);
