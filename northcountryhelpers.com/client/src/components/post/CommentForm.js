import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

import { Typography, Button, TextField } from '@material-ui/core';

const initialState = {
  text: '',
  name: '',
};

const CommentForm = ({ postId, addComment }) => {
  const [formData, setFormData] = useState(initialState);

  const { name, text } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <Typography style={{ margin: '2rem 0 0 0' }} variant='subtitle2'>
        Leave a comment...
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, formData);
          setFormData(initialState);
        }}
      >
        <TextField
          margin='normal'
          required
          fullWidth
          value={name}
          onChange={(e) => onChange(e)}
          name='name'
          label='Your Name'
        />
        <TextField
          margin='normal'
          inputProps={{ maxLength: 600 }}
          required
          fullWidth
          multiline
          value={text}
          rows='7'
          onChange={(e) => onChange(e)}
          name='text'
          label='Comment here'
        />
        <Typography align='left' variant='subtitle2'>
          * = required
        </Typography>
        <Button
          style={{ margin: '2rem 0 2rem 0' }}
          type='submit'
          variant='contained'
          color='primary'
        >
          Comment
        </Button>
      </form>
    </Fragment>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
