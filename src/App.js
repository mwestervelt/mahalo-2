import React, { Component } from 'react';

import Dropdown from './Dropdown'
import HighRisk from './HighRisk'
import LowRisk from './LowRisk'

import QuestionContainer from './QuestionContainer'

import './App.css';
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div className="App">

            MAHALO
            <br></br><br></br>
            <Dropdown />
            <HighRisk />
            <LowRisk />

        <Home/>
        <QuestionContainer/>

      </div>
    );
  }
}

export default App;
