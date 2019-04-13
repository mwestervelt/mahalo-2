import React, { Component } from 'react';
import Dropdown from './Dropdown'

class QuestionContainer extends Component {

  state = {
    show: false
  }



  render() {
    return (
      <div className="question-container">
            <h1 className="questions">"Have you recently had unprotected sex?"</h1>
            <div className="q-btns">
              <button onClick={this.props.handleYesQ1} className="btn">Yes</button>
              <button className="btn" onClick={this.props.handleNoQ1}>No</button>
            </div>

            <h1 className="questions">"Do you have irregular periods?"</h1>
            <div className="q-btns">
              <button className="btn" value="yes">Yes</button>
              <button onClick={this.props.handleNoQ2} className="btn">No</button>
            </div>

          <Dropdown
            choice={this.props.choice}
            risklevel={this.props.risklevel}
            handleChange={this.props.handleChange} />
      </div>
    );
  }

}

export default QuestionContainer;
