import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const NotFound = () => {
  return (
    <Container>
      <Typography variant='h4' style={{ margin: '10rem 0 0 0' }} align='center'>
        Oops! This page doesn't exist.
      </Typography>
    </Container>
  );
};

export default NotFound;
