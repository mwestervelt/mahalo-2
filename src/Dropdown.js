import React, { Component } from 'react';


class Dropdown extends Component {


state = {
  choice: ''
}

onChange = e => {
  this.setState({ choice: e.target.value }, () => this.props.handleChange(this.state.choice))
}

  render() {
    console.log(this.props);

      return (
        <div>
          <header>
            <h1>Days since the end of your last period:</h1>
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
