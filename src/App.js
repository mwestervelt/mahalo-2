import React, { Component } from 'react';
import CalendarComp from './CalendarComp'
import QuestionContainer from './QuestionContainer'
import './App.css';
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <QuestionContainer/>
      </div>
    );
  }
}

export default App;
