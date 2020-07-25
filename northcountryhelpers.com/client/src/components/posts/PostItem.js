import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Button, Badge } from '@material-ui/core';
import ChatBubble from '../layout/ChatBubble';

const PostItem = ({
  post: { _id, title, comments, date },
  deletePost,
  showDelete,
  showEdit,
}) => (
  <Card style={{ padding: '0 0.5rem 0 0' }}>
    <CardContent>{title}</CardContent>
    <CardActions>
      <Link to={`/posts/${_id}`}>
        <Button style={{ color: 'blue' }}>View Post</Button>
      </Link>
      {!showEdit && <Moment format='MM/DD/YYYY'>{date}</Moment>}

      <Badge
        badgeContent={comments.length === 0 ? '0' : comments.length}
        color='primary'
      >
        <ChatBubble />
      </Badge>
      {showEdit && (
        <Link to={`/editpost/${_id}`}>
          <Button>Edit post</Button>
        </Link>
      )}
      {showDelete && (
        <Button onClick={() => deletePost(_id)} color='secondary'>
          Delete post
        </Button>
      )}
    </CardActions>
  </Card>
);

PostItem.defaultProps = {
  showDelete: false,
  showEdit: false,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default connect(null, { deletePost })(PostItem);
