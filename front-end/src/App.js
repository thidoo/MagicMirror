import React, { Component } from 'react';
import './App.css';
import './DateTime/CurrentDateTime.css'

import CurrentDateTime from './DateTime/CurrentDateTime.js';
import WeatherForecast from "./Weather/WeatherForecast";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="CurrentDateTime"><CurrentDateTime/></div>
        <div className="WeatherForecast"><WeatherForecast/></div>
      </div>
    );
  }
}

export default App;
