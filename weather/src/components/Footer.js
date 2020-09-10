import React from 'react';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Footer = () => {
  return (
    <div className='footer-container'>
      <Link href='https://timothy.work'>
        <Typography variant='subtitle2' align='center'>
          timothy.work
        </Typography>
      </Link>
    </div>
  );
};

export default Footer;
