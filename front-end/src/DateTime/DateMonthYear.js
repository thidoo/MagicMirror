import React from 'react';

class DateMonthYear extends React.Component {
  render() {
    return (
      computeDateMonthYear(this.props.value)
    );
  }
}

function computeDateMonthYear(dateMonthYear){
  return String(dateMonthYear[0]).concat(" ", getMonthInWord(dateMonthYear[1]), " ", dateMonthYear[2]);
}

function getMonthInWord(monthId){
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[monthId];
}

export default DateMonthYear;
