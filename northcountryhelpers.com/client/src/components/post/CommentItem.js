import React from 'react';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

import { Typography, Button, Card, CardContent } from '@material-ui/core';

const CommentItem = ({
  postId,
  comment: { _id, name, user, text, date },
  auth,
  deleteComment,
}) => (
  <div style={{ margin: '2rem 0 0 0' }}>
    <Card>
      <CardContent>
        <Typography style={{ margin: '0 0 1.5rem 0' }} variant='subtitle1'>
          {text}
        </Typography>
        <Typography variant='caption'>
          Posted: <Moment format='MM/DD/YYYY'>{date}</Moment> <br></br> by:{' '}
          {name}
        </Typography>
        <br></br>
        {auth.isAuthenticated && !auth.loading && user === auth.user._id && (
          <Button
            onClick={() => deleteComment(postId, _id)}
            type='button'
            color='secondary'
            size='small'
          >
            Delete Comment
          </Button>
        )}
      </CardContent>
    </Card>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
