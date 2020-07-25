import React from 'react';
import compose from '../../img/compose.svg';
import information from '../../img/information.svg';
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '5rem',
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  marginT: {
    marginTop: '1rem',
  },
  marginT2: {
    marginTop: '0.5rem',
  },
  blue: {
    backgroundColor: 'rgb(68, 230, 233);',
  },
}));

export const LandingHeading = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth='sm'>
      <Typography
        className={classes.marginT}
        component='h1'
        variant='subtitle1'
      >
        A place for volunteer helpers to connect with those in need in Northern
        NH.
      </Typography>
      <Grid justify='center' container>
        <Grid item sm={12} md={6}>
          <Link to='/register'>
            <Button
              className={classes.marginT}
              variant='contained'
              color='primary'
            >
              <img
                src={compose}
                style={{
                  height: '0.99rem',
                  display: 'inline-block',
                  marginRight: '0.33rem',
                }}
                alt=''
              />{' '}
              make helper profile
            </Button>
          </Link>
        </Grid>
        <Grid item sm={12} md={6}>
          <Link to='/posts'>
            <Button className={classes.marginT} variant='contained'>
              <img
                src={information}
                style={{
                  height: '0.99rem',
                  display: 'inline-block',
                  marginRight: '0.33rem',
                }}
                alt=''
              />{' '}
              View help requests
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingHeading;
