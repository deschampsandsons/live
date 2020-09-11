import React, { useState, useEffect } from 'react';
import CurrentDetails from './CurrentDetails';
import Hourly from './Hourly';
import Daily from './Daily';
import Footer from './Footer';

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const weatherApi = {
  key: '',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const locationApiKey = '';

const Landing = () => {
  const [coordinates, setCoordinates] = useState([]);
  const [search, setSearch] = useState('');
  const [saveLocation, setSaveLocation] = useState(false);
  const [weather, setWeather] = useState({});
  const [locationName, setLocationName] = useState('');

  useEffect(() => {
    if (localStorage.lat) {
      setCoordinates([
        JSON.parse(localStorage.lat),
        JSON.parse(localStorage.lon),
      ]);
    }
    if (localStorage.name) {
      setLocationName(localStorage.name);
    }
  }, []);

  useEffect(() => {
    const callWeatherApi = () => {
      fetch(
        `${weatherApi.base}onecall?lat=${coordinates[0]}&lon=${coordinates[1]}&units=imperial&appid=${weatherApi.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setSearch('');
          setCoordinates([]);
          console.log('weather api called');
          console.log(result);
        });
    };

    if (coordinates.length === 2) callWeatherApi();
  }, [coordinates]);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    search &&
      fetch(
        `https://us1.locationiq.com/v1/search.php?key=${locationApiKey}&q=${search}&format=json`
      )
        .then((res) => res.json())
        .then((result) => {
          const { lat, lon, display_name } = result[0];
          setCoordinates([lat, lon]);
          setLocationName(display_name);
          console.log('location api called');
          if (saveLocation) {
            localStorage.setItem('lat', JSON.stringify(lat));
            localStorage.setItem('lon', JSON.stringify(lon));
            localStorage.setItem('name', JSON.stringify(display_name));
          }
        });
    e.target.reset();
  };

  return (
    <Container className='app'>
      <div className='form-container'>
        <form onSubmit={(e) => onSubmit(e)}>
          <TextField
            size='small'
            variant='outlined'
            required={true}
            type='text'
            placeholder='Enter Location...'
            value={search}
            onChange={(e) => onChange(e)}
            name='search'
          ></TextField>{' '}
          <br></br>
          <Checkbox
            type='checkbox'
            label='Save my location'
            name='saveLocation'
            onChange={(e) =>
              !saveLocation ? setSaveLocation(true) : setSaveLocation(false)
            }
          ></Checkbox>{' '}
          <Typography
            style={{ margin: '0 0.5rem 0 -0.5rem' }}
            variant='caption'
            align='center'
          >
            Save my location
          </Typography>
          <Button size='small' variant='contained' type='submit'>
            Go
          </Button>
        </form>
        <Typography
          style={{ margin: '1rem 0 0 0' }}
          variant='caption'
          align='center'
        >
          {locationName}
        </Typography>
      </div>
      <main>
        {typeof weather.current != 'undefined' ? (
          <div>
            <div className='heading-container'>
              <div className='current-container'>
                <Typography
                  variant='h3'
                  align='center'
                  style={{ marginTop: '1rem' }}
                >
                  {Math.round(weather.current.temp)}&#176;{' '}
                  <Typography component='span' variant='subtitle1'>
                    F
                  </Typography>
                </Typography>

                <Typography align='center' variant='subtitle2'>
                  {Math.round(weather.daily[0].temp.max) +
                    '\u00b0/' +
                    Math.round(weather.daily[0].temp.min) +
                    '\u00b0'}
                </Typography>

                <Typography variant='subtitle2' align='center'>
                  {weather.current.weather[0].description.toUpperCase()}
                </Typography>
              </div>

              <CurrentDetails weather={weather} />
            </div>

            <Container maxWidth='sm' align='center'>
              <Daily weather={weather} />
            </Container>
            <Container maxWidth='xs'>
              <Hourly weather={weather} />
            </Container>

            <Footer />
          </div>
        ) : (
          <Typography
            style={{ margin: '2rem 0 0 0' }}
            variant='h6'
            align='center'
          >
            Search for a location to see the weather!
          </Typography>
        )}
      </main>
    </Container>
  );
};

export default Landing;
