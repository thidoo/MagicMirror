import * as React from 'react';

class CurrentDate extends React.Component {
  constructor() {
    super();
    let today = new Date();
    this.state = {
      day = today.getDay(),
    };
  }

  render(){
    return (
      <div className='day'>
        {this.state.day}
      </div>
    );
  }
}

export default CurrentDate;
