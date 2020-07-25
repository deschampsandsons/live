import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  marginT: {
    marginTop: '1rem',
  },
  marginX: {
    margin: '1rem 0',
  },
  marginZero: {
    marginTop: '0',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialState = {
  name: '',
  hours: '',
  phone: '',
  email: '',
  location: '',
  offer: '',
  skills: '',
  color: '',
};

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
}) => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    name,
    hours,
    phone,
    email,
    location,
    offer,
    skills,
    color,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, true);
  };

  return (
    <Container component='main' maxWidth='md'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h2' variant='h5'>
          Edit Your Helper Profile
        </Typography>

        <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Typography variant='subtitle2' className={classes.marginT}>
                Pick an accent color for your profile
              </Typography>
              <input
                type='color'
                name='color'
                value={color}
                onChange={(e) => onChange(e)}
              />
              <TextField
                margin='normal'
                required
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
                value={phone}
                onChange={(e) => onChange(e)}
                name='phone'
                label='Phone Number'
                id='phone'
              />
              <TextField
                margin='normal'
                required
                fullWidth
                value={email}
                onChange={(e) => onChange(e)}
                name='email'
                label='Email'
                type='email'
                id='email'
              />
              <TextField
                margin='normal'
                required
                fullWidth
                value={location}
                onChange={(e) => onChange(e)}
                name='location'
                label='Town'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                margin='normal'
                fullWidth
                value={hours}
                onChange={(e) => onChange(e)}
                name='hours'
                label='Hours/days available'
              />{' '}
              <TextField
                margin='normal'
                fullWidth
                value={skills}
                onChange={(e) => onChange(e)}
                name='skills'
                label='Special Skills'
                placeholder='Any special skills or vocation you can offer?'
              />
              <Typography className={classes.marginT} variant='subtitle1'>
                Describe yourself and what kind of help you are offering. Try to
                be as detailed as possible:
              </Typography>
              <TextField
                className={classes.marginZero}
                inputProps={{ maxLength: 600 }}
                margin='normal'
                required
                fullWidth
                multiline
                rows='7'
                value={offer}
                onChange={(e) => onChange(e)}
                name='offer'
                label='600 char max.'
                type='offer'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            update your helper profile
          </Button>
          <Typography align='center' variant='subtitle2'>
            * = required
          </Typography>
          <Typography style={{ margin: '1rem 0 1rem 0' }} variant='subtitle1'>
            By creating a helper profile, you agree to offer your help or
            services free of charge and be contacted by those in need.
          </Typography>
        </form>
      </div>
    </Container>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, {
  createProfile,
  getCurrentProfile,
})(withRouter(EditProfile));
