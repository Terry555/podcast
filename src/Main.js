import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Main extends Component {
  render() {
    return (
      <div className="main-one">
        <h1>This is where the React Player will go!</h1>
        <ReactPlayer url='https://www.youtube.com/watch?v=79fzeNUqQbQ' playing/>
      </div>
    );
  }
}


export default Main;
