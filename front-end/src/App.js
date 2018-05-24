import React, { Component } from 'react';
import './App.css';
import './DateTime/CurrentDateTime.css'

import CurrentDateTime from './DateTime/CurrentDateTime.js';
import CurrentWeatherRequest from './Weather/CurrentWeatherRequest.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="CurrentDateTime"><CurrentDateTime/></div>
        <div className="CurrentWeatherRequest"><CurrentWeatherRequest/></div>
      </div>
    );
  }
}

export default App;
