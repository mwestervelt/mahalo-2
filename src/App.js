import React, { Component } from 'react';
import CalendarComp from './CalendarComp'
import QuestionContainer from './QuestionContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            MAHALO
            <br></br><br></br>
            <CalendarComp />
            <QuestionContainer />
      </div>
    );
  }
}

export default App;
