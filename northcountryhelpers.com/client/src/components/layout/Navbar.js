import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import useWindowDimensions from '../../hooks/UseWindowDimensions';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import logo from '../../img/NCHLogo-trans.png';
import usersvg from '../../img/user-svg.svg';
import logouticon from '../../img/logout.svg';
import dashicon from '../../img/dashboard.svg';
import menuIcon from '../../img/menu.svg';
import userAdd from '../../img/add-solid.svg';

export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const { width } = useWindowDimensions();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  let authLinks;
  let guestLinks;

  if (width >= 768) {
    authLinks = (
      <ul>
        <Link to='/dashboard'>
          <Button>
            {' '}
            <img
              src={dashicon}
              style={{
                height: '0.99rem',
                display: 'inline-block',
                marginRight: '0.25rem',
              }}
              alt=''
            />
            Dashboard
          </Button>
        </Link>
        <Link onClick={logout} to='#!'>
          <Button variant='contained'>
            {' '}
            <img
              src={logouticon}
              style={{
                height: '0.99rem',
                display: 'inline-block',
                marginRight: '0.25rem',
              }}
              alt=''
            />
            Logout
          </Button>
        </Link>
      </ul>
    );
    guestLinks = (
      <ul>
        <Link to='/register'>
          <Button>Register</Button>
        </Link>
        <Link to='/login'>
          <Button variant='contained'>
            <img
              src={usersvg}
              style={{
                height: '0.70rem',
                display: 'inline-block',
                marginRight: '0.25rem',
              }}
              alt=''
            />
            Login
          </Button>
        </Link>
      </ul>
    );
  } else if (width < 768) {
    authLinks = (
      <Fragment>
        <img
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup='true'
          onClick={handleToggle}
          src={menuIcon}
          style={{
            cursor: 'pointer',
            height: '1.66rem',
            display: 'inline-block',
            marginRight: '0.75rem',
          }}
          alt=''
        />
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper style={{ margin: '0 1.5rem 0 0' }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                    autoFocusItem={open}
                    id='menu-list-grow'
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link to='/dashboard'>
                        <img
                          src={dashicon}
                          style={{
                            height: '0.9rem',
                            display: 'inline-block',
                          }}
                          alt=''
                        />{' '}
                        <Button>Dashboard</Button>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link onClick={logout} to='#!'>
                        {' '}
                        <img
                          src={logouticon}
                          style={{
                            height: '0.90rem',
                            display: 'inline-block',
                          }}
                          alt=''
                        />
                        <Button>Logout</Button>
                      </Link>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Fragment>
    );

    guestLinks = (
      <Fragment>
        <img
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup='true'
          onClick={handleToggle}
          src={menuIcon}
          style={{
            cursor: 'pointer',
            height: '1.66rem',
            display: 'inline-block',
            marginRight: '0.75rem',
          }}
          alt=''
        />
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper style={{ margin: '0 1.5rem 0 0' }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    style={{ display: 'flex', flexDirection: 'column' }}
                    autoFocusItem={open}
                    id='menu-list-grow'
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>
                      {' '}
                      <Link to='/login'>
                        {' '}
                        <img
                          src={usersvg}
                          style={{
                            height: '0.90rem',
                            display: 'inline-block',
                          }}
                          alt=''
                        />
                        <Button>Login</Button>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to='/register'>
                        {' '}
                        <img
                          src={userAdd}
                          style={{
                            height: '0.90rem',
                            display: 'inline-block',
                          }}
                          alt=''
                        />
                        <Button>Register</Button>
                      </Link>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Fragment>
    );
  }

  return (
    <nav className='navbar'>
      <Link to='/'>
        <img src={logo} className='logo' alt='North Country Together' />
      </Link>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
