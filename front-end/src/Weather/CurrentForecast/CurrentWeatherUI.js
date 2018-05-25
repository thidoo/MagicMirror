import React from 'react';

import './CurrentWeatherUI.css';

class CurrentWeatherUI extends React.Component {

  render(){
    return (
      <div>
        <div className="location">{this.props.location}</div>
        <div className="weatherDescription">{this.props.weatherDescription}</div>
        <div className="temperature">{this.props.temperature}{"\xB0"}</div>
      </div>
  )
  }
}

export default CurrentWeatherUI;
