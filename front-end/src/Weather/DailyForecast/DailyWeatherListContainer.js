import React, { Component } from 'react';

import DailyWeatherList from "./DailyWeatherList";
import WeatherService from "../Service/WeatherService";
import WeatherHttpClient from "../Service/WeatherHttpClient";
import WeatherDataConverter from "../Service/WeatherDataConverter";

class DailyWeatherListContainer extends Component {

  constructor(props) {
    super(props);

    this.weatherService = new WeatherService(new WeatherHttpClient(), new WeatherDataConverter());

    this.state = {
      dailyWeatherList: [],
    }
  }

  componentDidMount(){
    let dailyWeatherData = this.weatherService.getDailyWeatherList();
    this.setState({
      dailyWeatherList: dailyWeatherData,
    });
  }

  render() {
    return <DailyWeatherList list={this.state.dailyWeatherList}/>;
  }
}

export default DailyWeatherListContainer;
