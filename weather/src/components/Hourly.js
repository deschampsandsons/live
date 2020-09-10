import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import expandArrow from '../img/cheveron-down.svg';

import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const Hourly = ({ weather } = weather) => {
  let curDate = new Date();
  let curTime = curDate.getTime();

  const windSpeed = (num) => {
    return Math.round(weather.hourly[num].wind_speed);
  };
  const windDeg = (num) => {
    return weather.hourly[num].wind_deg;
  };
  const humidity = (num) => {
    return Math.round(weather.hourly[num].humidity);
  };
  const pressure = (num) => {
    return weather.hourly[num].pressure;
  };
  const temp = (num) => {
    return Math.round(weather.hourly[num].temp);
  };
  const description = (num) => {
    return weather.hourly[num].weather[0].description;
  };

  const hourlyLine = (num) => {
    return (
      <Fragment>
        <Moment format='LT' add={{ hours: num }}>
          {curTime}
        </Moment>
        : {temp(num) + '\u00b0'}, {description(num)}, {humidity(num) + '% RH'},{' '}
        {windSpeed(num) + 'mph at ' + windDeg(num)}, {pressure(num) + ' hPa'}
      </Fragment>
    );
  };

  return (
    <div className='center-hourly'>
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
        >
          <Typography >12 Hour Forecast</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ justifyContent: 'center' }}>
          <Typography variant='subtitle2' align='center'>
            {hourlyLine(1)}
            <br></br>
            <br></br>
            {hourlyLine(2)}
            <br></br>
            <br></br>
            {hourlyLine(3)}
            <br></br>
            <br></br>
            {hourlyLine(4)}
            <br></br>
            <br></br>
            {hourlyLine(5)}
            <br></br>
            <br></br>
            {hourlyLine(6)}
            <br></br>
            <br></br>
            {hourlyLine(7)}
            <br></br>
            <br></br>
            {hourlyLine(8)}
            <br></br>
            <br></br>
            {hourlyLine(9)}
            <br></br>
            <br></br>
            {hourlyLine(10)}
            <br></br>
            <br></br>
            {hourlyLine(11)}
            <br></br>
            <br></br>
            {hourlyLine(12)}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

Hourly.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default Hourly;
