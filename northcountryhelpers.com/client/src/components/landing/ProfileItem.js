import React from 'react';
import PropTypes from 'prop-types';
import expandArrow from '../../img/cheveron-down.svg';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
  pointer: {
    cursor: 'pointer',
  },
  column: {
    flexBasis: '33.33%',
  },
  marginT: {
    margin: '0.5rem 0 0 0',
  },
  marginB: {
    margin: '0 0 0.5rem 0',
  },
  borderColor: (props) => ({
    borderLeft: `5px solid ${props.borderColor}`,
  }),
}));

const ProfileItem = ({
  profile: { name, location, offer, email, phone, skills, hours, color },
}) => {
  const props = { borderColor: `${color}` };
  const classes = useStyles(props);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={
          <img
            src={expandArrow}
            style={{
              height: '1.1rem',
            }}
            alt='Expand'
          />
        }
        aria-controls='panel1a-content'
        id='panel1a-header'
        className={classes.borderColor}
      >
        <div className={classes.column}>
          <Typography className='heading'>{name}</Typography>
        </div>
        <div className={classes.column}>
          <Typography
            style={{ margin: '0 0 0 4rem' }}
            align='right'
            className='secondaryHeading'
          >
            {location}
          </Typography>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>{offer}</Typography>
      </ExpansionPanelDetails>
      <Divider />

      <Typography className={classes.marginT} align='center'>
        {skills && 'Skills: ' + skills}{' '}
      </Typography>
      <Typography align='center'>Availability: {hours}</Typography>
      <Typography align='center'>{phone && 'Phone: ' + phone}</Typography>
      <Typography className={classes.marginB} align='center'>
        {' '}
        Email: {email}
      </Typography>
      <div className={classes.marginT}>
        <Typography
          className={classes.pointer}
          align='center'
          size='small'
          color='primary'
          onClick={handleClickOpen}
        >
          Disclaimer
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
            {'Be safe.'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              align='center'
              color='black'
              id='alert-dialog-slide-description'
            >
              This app is open to the public for anyone to register as a
              volunteer helper. No background checks or vetting is done by
              NorthCountryHelpers.com. Please use caution when meeting people
              online.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ExpansionPanel>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
