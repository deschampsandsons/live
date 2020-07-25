import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const initialState = {
  name: '',
  location: '',
  contact: '',
  title: '',
  text: '',
};

const AddPost = ({ addPost }) => {
  const [formData, setFormData] = useState(initialState);

  const { name, location, contact, title, text } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addPost(formData);
  };

  return (
    <Container
      align='center'
      style={{ margin: '5rem auto' }}
      component='main'
      maxWidth='sm'
    >
      <Typography component='h2' variant='h5'>
        Submit a request for help
      </Typography>
      <Typography style={{ margin: '1rem 0 0 0' }} variant='subtitle2'>
        Please be respectful of the time of others when considering your request
        for help. Currently, you may only have 1 active help request at a time.
      </Typography>

      <form onSubmit={(e) => onSubmit(e)}>
        <TextField
          margin='normal'
          fullWidth
          value={name}
          onChange={(e) => onChange(e)}
          id='name'
          label='Your Name'
          name='name'
        />
        <TextField
          margin='normal'
          fullWidth
          value={contact}
          onChange={(e) => onChange(e)}
          name='contact'
          label='Contact info (phone, email, etc.)'
          id='contact'
        />
        <TextField
          margin='normal'
          fullWidth
          value={location}
          onChange={(e) => onChange(e)}
          name='location'
          label='Where are you located?'
          type='location'
          id='location'
        />
        <TextField
          margin='normal'
          required
          fullWidth
          value={title}
          onChange={(e) => onChange(e)}
          name='title'
          label='Title for your post'
        />
        <TextField
          margin='normal'
          inputProps={{ maxLength: 600 }}
          required
          fullWidth
          multiline
          rows='7'
          value={text}
          onChange={(e) => onChange(e)}
          name='text'
          label='Describe the help that you need'
        />
        <Typography align='left' variant='subtitle2'>
          * = required
        </Typography>
        <Button
          style={{ margin: '2rem 0 0 0' }}
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
        >
          Post request for help
        </Button>
      </form>
    </Container>
  );
};

AddPost.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, {
  addPost,
})(withRouter(AddPost));
