import React, { Component, Fragment } from 'react';
import logo_white from './mahalo_logo_white.svg'
import QuestionContainer from './QuestionContainer'
import InfoCon from './InfoCon'


export default class Home extends Component {

  state = {
    showHeader: true,
    showQs: false,
    showInfo: false
  }

  toggleQuestions = () => {
    this.setState({ showHeader: !this.state.showHeader, showQs: !this.state.showQs })
  }

  handleNoQ1 = () => {
    this.setState({ showInfo: true, showQs: false })
  }

  render(){
    console.log(this.state)
    return(
      <div>
          {this.state.showHeader ?
            <Fragment>
              <img className='logo' src={ logo_white } alt='mahalo my guy' />

            <div className='box'>
              <h1>Getting to know if you're ovulating can be scary.</h1>
              <h1 className="line2"> Check your risk of pregnancy with us.</h1>
            </div>
            <button
              className="btn"
              onClick={this.toggleQuestions}>
              Check
            </button>
        
        </Fragment>
          : null}

        {this.state.showQs ?
          <QuestionContainer
            handleNoQ1={this.handleNoQ1}
            choice={this.props.choice}
            risklevel={this.props.risklevel}
            handleChange={this.props.handleChange}
            />
          :
          null
        }

        {this.state.showInfo ? <InfoCon /> : null }
      </div>
    )
  }
}
