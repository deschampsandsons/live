import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

const CurrentDetails = ({ weather } = weather) => {
  const windSpeed = Math.round(weather.current.wind_speed);
  const windDeg = weather.current.wind_deg;
  const windGust = Math.round(weather.current.wind_gust);
  const humidity = Math.round(weather.current.humidity);
  const dewPoint = Math.round(weather.current.dew_point);
  const feelsLike = Math.round(weather.current.feels_like);
  const uvi = weather.current.uvi;
  const pressure = weather.current.pressure;
  const clouds = weather.current.clouds;

  return (
    <div className='details-container'>
      <Typography variant='subtitle2' align='center'>
        RH: {humidity}% DP: {dewPoint}&#176;, feels like {feelsLike}&#176;
      </Typography>
      <Typography variant='subtitle2' align='center'>
        Pressure: {pressure} hPa
      </Typography>
      <Typography variant='subtitle2' align='center'>
        Cloud cover: {clouds}%
      </Typography>

      <Typography variant='subtitle2' align='center'>
        Wind: {windSpeed} mph at {windDeg} deg
        {windGust ? ', Gusting ' + windGust + 'mph' : ''}
      </Typography>

      <Typography variant='subtitle2' align='center'>
        UV index: {uvi}
      </Typography>
    </div>
  );
};

CurrentDetails.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default CurrentDetails;
