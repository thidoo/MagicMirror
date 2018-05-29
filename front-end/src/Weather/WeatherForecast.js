import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './CurrentForecast/store';

import CurrentWeatherContainer from './CurrentForecast/CurrentWeatherContainer';
import DailyWeatherListContainer from './DailyForecast/DailyWeatherListContainer';

import './WeatherForecast.css';

const store = configureStore();

class WeatherForecast extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <CurrentWeatherContainer/>
        {/*<DailyWeatherListContainer/>*/}
      </Provider>
    )
  }
}

export default WeatherForecast;