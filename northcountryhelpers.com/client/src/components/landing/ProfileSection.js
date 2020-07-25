import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import ProfileItem from './ProfileItem';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const ProfileSection = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProfiles = async () => {
      setLoading(true);
      const res = await axios.get('/api/profile');
      setProfiles(res.data);
      setLoading(false);
    };
    fetchProfiles();
  }, []);

  const setfilteredProfiles = (search) => {
    if (!search) return profiles;
    return profiles.filter((o) =>
      Object.keys(o).some(
        (k) =>
          typeof o[k] === 'string' &&
          o[k].toLowerCase().includes(String(search).toLowerCase())
      )
    );
  };

  const filteredProfiles = setfilteredProfiles(search);

  const onChange = (e) => setSearch(e.target.value);

  return (
    <Fragment>
      {loading ? (
        <Typography
          style={{
            margin: '5rem 0',
          }}
          variant='h5'
          align='center'
        >
          Loading...
        </Typography>
      ) : (
        <Container>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant='subtitle1'>Helpers:</Typography>
            <TextField
              style={{
                padding: '0 0 2rem 0',
              }}
              onChange={(e) => onChange(e)}
              label='Search'
              name='search'
            />
          </div>

          <Grid wrap='wrap' container spacing={1}>
            {filteredProfiles.map((profile) => (
              <Grid key={profile._id} item sm={12} lg={6}>
                {' '}
                <ProfileItem profile={profile} />{' '}
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </Fragment>
  );
};

export default ProfileSection;
