import React from 'react';

import axios from "axios/index";

import updateCurrentWeather from '../CurrentForecast/actions.js';

class WeatherHttpClient{

  fetchCurrentWeatherData(){
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Melbourne,au?&APPID=4a1fe1f56f0aca5ec03a7ba51fc9aa31')
      .then( (response) => {
        dispatch(updateCurrentWeather(response));
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  fetchDailyWeatherData() {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Melbourne,au?&APPID=4a1fe1f56f0aca5ec03a7ba51fc9aa31')
      .then( (response) => {

      })
      .catch( (error) => {
        console.log(error);
      });
  }
}

export default WeatherHttpClient;