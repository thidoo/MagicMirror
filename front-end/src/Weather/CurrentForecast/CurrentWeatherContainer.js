import React from 'react';
import { connect } from 'react-redux';

import { fetchCurrentWeatherData } from "./actions";

import CurrentWeather from './CurrentWeather';
import WeatherDataConverter from "../Service/WeatherDataConverter";

class CurrentWeatherContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log("before");
    this.props.fetchCurrentWeatherData('http://api.openweathermap.org/data/2.5/weather?q=Melbourne,au?&APPID=4a1fe1f56f0aca5ec03a7ba51fc9aa31',
                                        new WeatherDataConverter());
    console.log("after: ");
  }

  render() {
    return <CurrentWeather value={this.props.currentWeather}/>
  }
}

function mapStateToProps(state) {
  return {
    currentWeather: state.updateCurrentWeather.currentWeather
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCurrentWeatherData: (url,converter) => {
    fetchCurrentWeatherData(url, converter)(dispatch);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeatherContainer);
