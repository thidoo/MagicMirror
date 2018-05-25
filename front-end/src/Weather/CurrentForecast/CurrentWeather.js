import React from 'react';
import axios from 'axios';

import './CurrentWeather.css';

import CurrentWeatherUI from './CurrentWeatherUI';
import {convertFromKelvinToCelcius, capitaliseFirstLetter} from '../Service/WeatherService';

class CurrentWeather extends React.Component {

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

  fetchWeather() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Melbourne,au?&APPID=4a1fe1f56f0aca5ec03a7ba51fc9aa31')
      .then( (response) => {
        this.setState({
          allData: response.data,
          weatherInfo: {
            location: response.data.name,
            weatherDescription: capitaliseFirstLetter(response.data.weather[0].description),
            temperature: convertFromKelvinToCelcius(response.data.main.temp),
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
        <CurrentWeatherUI
          location={this.state.weatherInfo.location}
          weatherDescription={this.state.weatherInfo.weatherDescription}
          temperature={this.state.weatherInfo.temperature}
        />
      </div>
    );
  }
}

export default CurrentWeather;
