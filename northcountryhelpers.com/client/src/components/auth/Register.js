import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import tree from '../../img/location-park.svg';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pointer: {
    cursor: 'pointer',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  marginT: {
    marginTop: '1rem',
  },
}));

export const Register = ({ setAlert, register, isAuthenticated }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match.', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <img
          src={tree}
          style={{
            height: '3rem',
            display: 'inline-block',
            marginRight: '0.25rem',
          }}
          alt=''
        />
        <Typography className={classes.marginT} component='h1' variant='h5'>
          Register User Account
        </Typography>
        <Typography align='center' component='h3' variant='subtitle1'>
          Next you can make your helper profile or post a request!
        </Typography>
        <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            value={email}
            onChange={(e) => onChange(e)}
            label='Email Address'
            name='email'
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            value={password}
            onChange={(e) => onChange(e)}
            name='password'
            label='Password'
            type='password'
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            value={password2}
            onChange={(e) => onChange(e)}
            name='password2'
            label='Confirm Password'
            type='password'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Register Account
          </Button>
          <Grid container>
            <Grid item xs>
              <div>
                <Typography
                  className={classes.pointer}
                  variant='subtitle2'
                  onClick={handleClickOpen}
                >
                  Privacy policy
                </Typography>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-labelledby='alert-dialog-slide-title'
                  aria-describedby='alert-dialog-slide-description'
                >
                  <DialogTitle align='center' id='alert-dialog-slide-title'>
                    {'Privacy Policy'}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText
                      align='center'
                      color='black'
                      id='alert-dialog-slide-description'
                    >
                      Any personal information you submit will never be given or
                      sold to a 3rd party, or used in any manner outside of this
                      web application. Important communications about this web
                      application may be sent to your email.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color='primary'>
                      accept
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </Grid>
            <Grid item>
              <Link href='/login' variant='body2'>
                {'Already have an account? Sign in'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
