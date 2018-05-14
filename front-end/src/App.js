import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrentDateTime from './DateTime/CurrentDateTime.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrentDateTime/>
      </div>
    );
  }
}

export default App;
