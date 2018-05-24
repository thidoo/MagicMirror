import React, { Component } from 'react';
import axios from 'axios';

import './WeatherRequest.css';

import CurrentWeather from './CurrentWeather.js';

class WeatherRequest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allData: '',
      weatherInfo: {
        location: '',
        weatherDescription: '',
        temperature: '',
      }
    }
  }

  componentDidMount(){
    this.fetchWeather();
  }

  convertToFToC(temperatureInF){
    return Math.round(temperatureInF - 273.15);
  }

  capitaliseFirstLetter(description){
    return description.charAt(0).toUpperCase() + description.slice(1);
  }

  fetchWeather() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Melbourne,au?&APPID=4a1fe1f56f0aca5ec03a7ba51fc9aa31')
      .then( (response) => {
        this.setState({
          allData: response.data,
          weatherInfo: {
            location: response.data.name,
            weatherDescription: this.capitaliseFirstLetter(response.data.weather[0].description),
            temperature: this.convertToFToC(response.data.main.temp),
          }
        });
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <CurrentWeather
          location={this.state.weatherInfo.location}
          weatherDescription={this.state.weatherInfo.weatherDescription}
          temperature={this.state.weatherInfo.temperature}
        />
      </div>
    );
  }
}

export default WeatherRequest;
