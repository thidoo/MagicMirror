import React from 'react';

import CurrentWeatherContainer from './CurrentForecast/CurrentWeatherContainer';
import DailyWeatherListContainer from './DailyForecast/DailyWeatherListContainer';

import './WeatherForecast.css';

class WeatherForecast extends React.Component {
  render() {
    return (
      <div className="Weather">
        <CurrentWeatherContainer/>
        <DailyWeatherListContainer/>
      </div>
    )
  }
}

export default WeatherForecast;