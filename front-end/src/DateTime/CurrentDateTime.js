import React from 'react';

import CurrentDateTimeUI from './CurrentDateTimeUI';
import buildDay from './Builder/DayBuilder';
import buildDate from './Builder/DateBuilder';
import buildTime from './Builder/TimeBuilder';

import './CurrentDateTime.css';

class CurrentDateTime extends React.Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
    };
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.getNewDateTime(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  getNewDateTime() {
    this.setState({
      today: new Date(),
    });
  }

  render(){
    return (
      <CurrentDateTimeUI
        day={buildDay(this.state.today)}
        date={buildDate(this.state.today)}
        time={buildTime(this.state.today)}
      />
    );
  }
}

export default CurrentDateTime;
