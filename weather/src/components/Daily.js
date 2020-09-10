import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

const curDate = new Date();

let nextDaysArray = ['', '', ''];

switch (curDate.getDay()) {
  case 0:
    nextDaysArray = ['Mon', 'Tues', 'Wed'];
    break;
  case 1:
    nextDaysArray = ['Tues', 'Wed', 'Thurs'];
    break;
  case 2:
    nextDaysArray = ['Wed', 'Thurs', 'Fri'];
    break;
  case 3:
    nextDaysArray = ['Thurs', 'Fri', 'Sat'];
    break;
  case 4:
    nextDaysArray = ['Fri', 'Sat', 'Sun'];
    break;
  case 5:
    nextDaysArray = ['Sat', 'Sun', 'Mon'];
    break;
  case 6:
    nextDaysArray = ['Sun', 'Mon', 'Tues'];
    break;
  default:
    break;
}

const Daily = ({ weather } = weather) => {
  const tempMax = (num) => {
    return Math.round(weather.daily[num].temp.max);
  };
  const tempMin = (num) => {
    return Math.round(weather.daily[num].temp.min);
  };

  return (
    <div className='daily-container'>
      {' '}
      <div>
        <Typography align='center' variant='subtitle2'>
          {nextDaysArray[0]}
        </Typography>{' '}
        <img
          src={`https://openweathermap.org/img/wn/${weather.daily[0].weather[0].icon}@2x.png`}
          height='64px'
          alt='Icon'
        />{' '}
        <br></br>
        <Typography align='center' variant='subtitle2'>
          {tempMax(1) + '\u00b0/' + tempMin(1) + '\u00b0'}
        </Typography>
      </div>
      <div>
        <Typography align='center' variant='subtitle2'>
          {nextDaysArray[1]}
        </Typography>{' '}
        <img
          src={`https://openweathermap.org/img/wn/${weather.daily[1].weather[0].icon}@2x.png`}
          height='64px'
          alt='Icon'
        />{' '}
        <br></br>
        <Typography align='center' variant='subtitle2'>
          {tempMax(2) + '\u00b0/' + tempMin(2) + '\u00b0'}
        </Typography>
      </div>
      <div>
        <Typography align='center' variant='subtitle2'>
          {nextDaysArray[2]}
        </Typography>{' '}
        <img
          src={`https://openweathermap.org/img/wn/${weather.daily[2].weather[0].icon}@2x.png`}
          height='64px'
          alt='Icon'
        />{' '}
        <br></br>
        <Typography align='center' variant='subtitle2'>
          {tempMax(3) + '\u00b0/' + tempMin(3) + '\u00b0'}
        </Typography>
      </div>
    </div>
  );
};

Daily.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default Daily;
