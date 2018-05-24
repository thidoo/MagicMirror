import React from 'react';

class DayWeather extends React.Component {

  render(){
    return (
      <div>
        <div className="day">{this.props.day}</div>
        <div className="minTemp">{this.props.minTemp}{"\xB0"}</div>
        <div className="maxTemp">{this.props.maxTemp}{"\xB0"}</div>
        <div className="description">{this.props.description}</div>
      </div>
    )
  }
}

export default DayWeather;