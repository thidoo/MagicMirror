import React from 'react';

import './DailyWeatherList.css';

class DailyWeatherList extends React.Component {

  render(){
    return (
      <div className="DailyWeatherList">
        {this.props.list.map(weatherRow => (
          <div className="weatherRow">
            <div className="day">{weatherRow.day}</div>
            <div className="minTemp">{weatherRow.minTemp}{"\xB0"}</div>
            <div className="maxTemp">{weatherRow.maxTemp}{"\xB0"}</div>
            <div className="description">{weatherRow.description}</div>
          </div>
          ))}
      </div>
    )
  }
}

export default DailyWeatherList;