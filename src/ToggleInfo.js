import React, { Component } from 'react'

export default class ToggleInfo extends Component {
    state = {
        toggleOn:false
    }

    handleToggle = () => {
      console.log('I was clicked ')
      this.setState({
          toggleOn: !this.state.toggleOn
       })
    }
  render() {
    return (  
      <div>
        <button onClick={this.handleToggle} className="accordion">Know Your Options</button>
        { this.state.toggleOn ? this.props.children : null }
      </div>
    )
  }
}
