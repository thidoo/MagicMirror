import React from 'react';

import CurrentWeatherUI from './CurrentWeatherUI';
import WeatherService from '../Service/WeatherService';
import WeatherHttpClient from '../Service/WeatherHttpClient';
import WeatherDataConverter from '../Service/WeatherDataConverter';

class CurrentWeatherContainer extends React.Component {

  constructor(props) {
    super(props);
    this.weatherService = new WeatherService(new WeatherHttpClient(), new WeatherDataConverter());

    this.state = {
      currentWeather: {
        location: '',
        description: '',
        temperature: '',
      }
    }
  }

  componentDidMount(){
    let currentWeatherData = this.weatherService.getCurrentWeather();
    this.setState({
      currentWeather: {
        location: currentWeatherData.location,
        description: currentWeatherData.description,
        temperature: currentWeatherData.temperature,
      }
    });
  }

  render() {
    return <CurrentWeatherUI value={this.state.currentWeather}/>
  }
}

export default CurrentWeatherContainer;
