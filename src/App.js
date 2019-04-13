import React, { Component } from 'react';
import Dropdown from './Dropdown'
import HighRisk from './HighRisk'
import LowRisk from './LowRisk'
import QuestionContainer from './QuestionContainer'
import './App.css';
import Home from './Home'

class App extends Component {


  state = {
    choice: '',
    risklevel: ''
  }

  toggleRiskContainer = () => {
    if (this.state.risklevel === "high") {
      return <HighRisk />
    } else if (this.state.risklevel === "low") {
      return <LowRisk />
    } else {
      return null
    }
  }

  handleChange = (choice) => {
    this.setState({ choice: choice }, () => this.calculateRisk())
  }

  calculateRisk = () => {
    console.log('calculator');

      switch (this.state.choice) {
        case 'choose an option':
          this.setState({ risklevel: '' })
          break
        case 'On period right now':
          this.setState({ risklevel: 'low'})
          break
        case '1-4':
          this.setState({ risklevel: 'low' })
          break
        case '5-9':
          this.setState({ risklevel: 'high' })
          break
        case '10':
          this.setState({ risklevel: 'low' })
          break
        default:
          console.log('mahalo')
      }
    }

  render() {
    return (
      <div className="App">
            

            <QuestionContainer/>
            <Dropdown
              choice={this.state.choice}
              risklevel={this.state.risklevel}
              handleChange={this.handleChange} />
            {this.toggleRiskContainer()}
      </div>
    );
  }
}

export default App;
