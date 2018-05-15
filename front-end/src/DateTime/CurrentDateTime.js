import React from 'react';

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
      <div className='current-date'>
        <Day className='day' value={this.state.today.getDay()} />
        <DateMonthYear className='date-month-year' value={[this.state.today.getDate(), this.state.today.getMonth(), this.state.today.getFullYear()]} />
        <Time className='time' value={[this.state.today.getHours(), this.state.today.getMinutes(), this.state.today.getSeconds()]} />
      </div>
    );
  }
}

export default CurrentDate;
