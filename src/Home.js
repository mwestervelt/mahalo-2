import React, { Component } from 'react';
import logo_white from './mahalo_logo_white.svg'
import QuestionContainer from './QuestionContainer'


export default class Home extends Component {

  state = {
    showQs: false
  }

  toggleQuestions = () => {
    this.setState({ showQs: !this.state.showQs })
  }

  render(){
    console.log(this.state)
    return(
      <div className='logo-div'>
        <img className='logo' src={ logo_white } alt='logo' />
        {this.state.showQs ?
          <QuestionContainer
            choice={this.props.choice}
            risklevel={this.props.risklevel}
            handleChange={this.props.handleChange}
            />
          :
          <button onClick={this.toggleQuestions}>Start!</button>
        }
      </div>

    )
  }
}
