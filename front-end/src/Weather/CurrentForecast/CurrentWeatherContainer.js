import React from 'react';
import { connect } from 'react-redux';

import CurrentWeather from './CurrentWeather';

import { updateCurrentWeather } from "./actions";

class CurrentWeatherContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.updateCurrentWeather();
  }

  render() {
    const {currentWeather} = this.props.currentWeather;
    console.log("currentWeather", currentWeather);
    return <CurrentWeather value={this.props.currentWeather}/>
  }
}

function mapStateToProps(state, ownProps){
  return {
    currentWeather: state.currentWeather
  }
}

function mapDispatchToProps() {
  return {
    updateCurrentWeather
  }
}

const CurrentWeatherContainerContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentWeatherContainer);

export default CurrentWeatherContainerContainer;
