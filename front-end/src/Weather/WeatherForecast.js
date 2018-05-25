import React from 'react';

import CurrentWeather from './CurrentForecast/CurrentWeather';
import DailyWeather from './DailyForecast/DailyWeather';

import './WeatherForecast.css';

class WeatherForecast extends React.Component {
  render() {
    return (
      <div className="Weather">
        <div className="CurrentWeather"><CurrentWeather/></div>
        <div className="DailyWeather"><DailyWeather/></div>
      </div>
    )
  }
}

export default WeatherForecast;