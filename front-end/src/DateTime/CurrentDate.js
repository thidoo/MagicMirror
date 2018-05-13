import React from 'react';

import Day from './Day.js';

class CurrentDate extends React.Component {
  constructor() {
    super();
    let today = new Date();
    this.state = {
      day : today.getDay(),
    };
  }

  renderDay(dayId) {
    return <Day value={dayId} />;
  }

  render(){
    return (
      <div className='day'>
        <Day value={this.state.day} />
      </div>
    );
  }
}

export default CurrentDate;
