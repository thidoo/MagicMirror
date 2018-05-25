import React, { Component } from 'react';
import axios from 'axios';

import {convertToDayWeather} from "../Converter/WeatherDataConverter";
import DailyWeatherUI from "./DailyWeatherUI";

class DailyWeather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allData: [],
    }
  }

  componentDidMount(){
    this.fetchWeather();
  }

  fetchWeather() {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Melbourne,au?&APPID=4a1fe1f56f0aca5ec03a7ba51fc9aa31')
      .then( (response) => {
        this.setState({
          allData: response.data.list,
        });
        console.log("allData", this.state.allData);
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  generateDayWeatherRow(dayWeatherFullData){
    let dayWeatherShortData = convertToDayWeather(dayWeatherFullData);
    return (
      <div>
        <DailyWeatherUI
          day={dayWeatherShortData.day}
          minTemp={dayWeatherShortData.minTemp}
          maxTemp={dayWeatherShortData.maxTemp}
          description={dayWeatherShortData.description}
        />
      </div>
    )
  }

  render() {
    return (
      this.state.allData.map(
        dayWeatherFullData => this.generateDayWeatherRow(dayWeatherFullData)
      )
    );
  }
}

export default DailyWeather;
