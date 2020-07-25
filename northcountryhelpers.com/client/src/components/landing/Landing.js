import React, { Fragment, useState } from 'react';
import LandingHeading from './LandingHeading';
import ProfileSection from './ProfileSection';
import { sendFeedback } from '../../actions/feedback';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import trLogo from '../../img/trdesign-light.png';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  marginT: {
    marginTop: '1rem',
  },
  marginT2: {
    marginTop: '2rem',
  },
  marginX: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
}));

const Landing = ({ sendFeedback, getProfiles }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [formData, setFormData] = useState({ text: '' });
  const { text } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    sendFeedback({ text });
  };
  return (
    <Fragment>
      <LandingHeading />
      <ProfileSection />
      <Container maxWidth='md' align='center' className={classes.marginT2}>
        <Divider />
        <br></br>
        <form onSubmit={(e) => onSubmit(e)}>
          <TextField
            variant='filled'
            inputProps={{ maxLength: 1000 }}
            margin='normal'
            required
            label='Send a message!'
            id='text'
            value={text}
            onChange={(e) => onChange(e)}
            name='text'
          />{' '}
          <br></br>
          <Button type='submit' variant='contained' color='primary'>
            Send feedback
          </Button>
        </form>
        <div className={classes.marginT2}>
          <Button variant='outlined' color='primary' onClick={handleClickOpen}>
            about this website
          </Button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby='alert-dialog-slide-title'
            aria-describedby='alert-dialog-slide-description'
          >
            <DialogTitle align='center' id='alert-dialog-slide-title'>
              {'About North Country Helpers'}
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                align='center'
                color='black'
                id='alert-dialog-slide-description'
              >
                This website is built and maintained by:<br></br>
                <Link href='https://northernreachnh.com'>
                  Northern Reach Web Services
                </Link>
                . <br></br> <br></br> I hope that this website can be a central
                platform to connect those who are looking to help their
                community with those in need.
                <br></br> <br></br>A special thanks to{' '}
                <Link href='https://tylerryan.design'> Tyler Ryan Design</Link>{' '}
                for donating his time making an awesome logo for this website.
                Thank you! <br></br> <br></br>
                <img src={trLogo} alt='' className='tr-logo' /> <br></br>{' '}
                <br></br> You can help NorthCountryHelpers.com by telling your
                friends and helping to spread the word.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='primary'>
                back
              </Button>
            </DialogActions>
          </Dialog>
        </div>

        <div className={classes.marginX}>
          Website by: <Link href='https://northernreachnh.com'>NRWS</Link>
        </div>
      </Container>
    </Fragment>
  );
};

Landing.propTypes = {
  sendFeedback: PropTypes.func.isRequired,
};

export default connect(null, { sendFeedback })(Landing);
