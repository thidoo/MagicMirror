import React from 'react';

import CurrentWeather from './CurrentWeather';
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

  async componentDidMount(){
    console.log('Started featching weather data');
    let currentWeatherData = await this.weatherService.getCurrentWeather();
    console.log('Weather data: ', currentWeatherData);
    this.setState({
      currentWeather: {
        location: currentWeatherData.location,
        description: currentWeatherData.description,
        temperature: currentWeatherData.temperature,
      }
    });
  }

  render() {
    return <CurrentWeather value={this.state.currentWeather}/>
  }
}

export default CurrentWeatherContainer;
