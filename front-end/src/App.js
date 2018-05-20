import React, { Component } from 'react';
import './App.css';
import './DateTime/CurrentDateTime.css'

import CurrentDateTime from './DateTime/CurrentDateTime.js';
import WeatherRequest from './Weather/WeatherRequest.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="CurrentDateTime"><CurrentDateTime/></div>
        <div className="WeatherRequest"><WeatherRequest/></div>
      </div>
    );
  }
}

export default App;
