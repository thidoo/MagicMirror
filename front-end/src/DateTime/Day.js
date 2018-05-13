import React from 'react';

class Day extends React.Component {
  render() {
    return (
      getDayInWord(this.props.value)
    );
  }
}

function getDayInWord(dayId){
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  return weekday[dayId];
}

export default Day;