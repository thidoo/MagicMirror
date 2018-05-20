import React from 'react';

import './CurrentDateTime.css';

import Day from './Day.js';
import DateMonthYear from './DateMonthYear.js';
import Time from './Time.js';

class CurrentDate extends React.Component {
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
      <div>
        <div className='day'><Day  value={this.state.today.getDay()} /></div>
        <div className='date-month-year'><DateMonthYear  value={[this.state.today.getDate(), this.state.today.getMonth(), this.state.today.getFullYear()]} /></div>
        <div className='time'><Time  value={[this.state.today.getHours(), this.state.today.getMinutes(), this.state.today.getSeconds()]} /></div>
      </div>
    );
  }
}

export default CurrentDate;
