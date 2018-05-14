import React from 'react';

class Time extends React.Component {
  render() {
    return (
      computeTime(this.props.value)
    );
  }
}

function computeTime(time){
  return String(time[0]).concat(":", time[1], ":", time[2]);
}

export default Time;
