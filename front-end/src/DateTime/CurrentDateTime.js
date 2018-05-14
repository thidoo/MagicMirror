import React from 'react';

import Day from './Day.js';
import DateMonthYear from './DateMonthYear.js';
import Time from './Time.js';

class CurrentDate extends React.Component {
  constructor() {
    super();
    let today = new Date();

    this.state = {
      day : today.getDay(),
      dateMonthYear: [today.getDate(), today.getMonth(), today.getFullYear()],
      time: [today.getHours(), today.getMinutes(), today.getSeconds()],
    };
  }

  renderDay(dayId) {
    return <Day value={dayId} />;
  }

  render(){
    return (
      <div className='current-date'>
        <Day className='day' value={this.state.day} />
        <DateMonthYear className='date-month-year' value={this.state.dateMonthYear} />
        <Time className='time' value={this.state.time} />
      </div>
    );
  }
}

export default CurrentDate;
