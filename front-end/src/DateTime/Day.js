import React from 'react';

import getDayInWord from './DayService.js';

class Day extends React.Component {
  render() {
    return (
      getDayInWord(this.props.value)
    );
  }
}

export default Day;
