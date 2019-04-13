import React, { Component } from 'react';
import Dropdown from './Dropdown'
import HighRisk from './HighRisk'
import LowRisk from './LowRisk'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            MAHALO
            <br></br><br></br>
            <Dropdown />
            <HighRisk />
            <LowRisk />
      </div>
    );
  }
}

export default App;
