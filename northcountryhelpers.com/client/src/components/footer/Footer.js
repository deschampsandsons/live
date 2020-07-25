import React, { useState } from 'react';
import { sendFeedback } from '../../actions/feedback';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  marginT: {
    marginTop: '1rem'
  }
}));

const initialState = {
  text: ''
};

export const Footer = ({ sendFeedback }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { text } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    sendFeedback(formData);
  };
  return (
    <Container align='center' className={classes.marginT}>
      <Divider />
      <Typography align='center' variant='subtitle1'>
        This app is in open beta and we need your feedback as we continue to
        improve the design and add new features.absolute.
      </Typography>
      <form onSubmit={e => onSubmit(e)}>
        <TextField
          variant='outlined'
          inputProps={{ maxLength: 6000 }}
          margin='normal'
          required
          multiline
          rows='5'
          value={text}
          onChange={e => onChange(e)}
          name='text'
        />{' '}
        <br></br>
        <Button type='submit' variant='contained' color='primary'>
          Send feedback
        </Button>
      </form>
    </Container>
  );
};

Footer.propTypes = {
  sendFeedback: PropTypes.func.isRequired
};

export default connect(null, { sendFeedback })(Footer);
