import React, { Component } from 'react';


class Dropdown extends Component {

  state = {
    choice: '',
    risklevel: ''
  }

  // componentDidUpdate(prevState) {
  //   if (this.state.choice !== prevState.choice) {
  //     this.calculateRisk()
  //
  //   }
  // }

onChange = e => {
  this.setState({ choice: e.target.value }, () => this.calculateRisk())
}

calculateRisk = (e) => {
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
    console.log(this.state);

      return (
        <div>
          <header>
            <h1>this is the the dropdown</h1>
          </header>
          <div>
            <select onChange={this.onChange}>
              <option value='choose an option'>choose an option</option>
              <option value='On period right now'>I'm on my period right now</option>
              <option value='1-4'>1-4 days ago</option>
              <option value='5-9'>5-9 days ago</option>
              <option value='10'>10+ days ago</option>
            </select>
          </div>
        </div>
      );
    }
  }

export default Dropdown;
