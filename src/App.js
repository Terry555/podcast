import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import css from './css/main.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>HEADER IN APP.JS</h1>
        <Main/>
      </div>
    );
  }
}

export default App;
