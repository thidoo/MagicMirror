import React from 'react';

class Time extends React.Component {
  render() {
    return (
      computeTime(this.props.value)
    );
  }
}

function computeTime(time){
  return String(getTimeInTwoDigits(time[0]).concat(":", getTimeInTwoDigits(time[1]), ":", getTimeInTwoDigits(time[2])));
}

function getTimeInTwoDigits(number){
  return (number < 10 ? '0' : '') + number;
}

export default Time;
