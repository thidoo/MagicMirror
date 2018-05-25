import React from 'react';

import './DailyWeatherUI.css';

class DailyWeatherUI extends React.Component {

  render(){
    return (
      <div className="weatherRow">
        <div className="day">{this.props.day}</div>
        <div className="minTemp">{this.props.minTemp}{"\xB0"}</div>
        <div className="maxTemp">{this.props.maxTemp}{"\xB0"}</div>
        <div className="description">{this.props.description}</div>
      </div>
    )
  }
}

export default DailyWeatherUI;