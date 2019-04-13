import React, { Component, Fragment } from 'react';
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
      <div>
        {this.state.showQs ?
          <QuestionContainer
            choice={this.props.choice}
            risklevel={this.props.risklevel}
            handleChange={this.props.handleChange}
            />
          :
          <div>
            <div className='box'>
              <h1>Getting to know if you're ovulating can be scary.</h1>
              <h1 className="line2"> Check your risk of pregnancy with us.</h1>
            </div>
            <button
              className="btn"
              onClick={this.toggleQuestions}>
              Check
            </button>
          </div>
        }
      </div>
    )
  }
}
