import React from 'react';

class CurrentDateTimeUI extends React.Component {
  render(){
    return (
      <div>
        <div className='day'>{this.props.day}</div>
        <div className='date'>{this.props.date}</div>
        <div className='time'>{this.props.time}</div>
      </div>
    );
  }
}

export default CurrentDateTimeUI;