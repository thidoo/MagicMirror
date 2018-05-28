import React from 'react';

import './CurrentWeatherUI.css';

class CurrentWeatherUI extends React.Component {

  render(){
    return (
      <div className="CurrentWeather">
        <div className="location">{this.props.location}</div>
        <div className="weatherDescription">{this.props.description}</div>
        <div className="temperature">{this.props.temperature}{"\xB0"}</div>
      </div>
    )
  }
}

export default CurrentWeatherUI;
