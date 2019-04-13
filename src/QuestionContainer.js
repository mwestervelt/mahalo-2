import React, { Component } from 'react';
import Dropdown from './Dropdown'

class QuestionContainer extends Component {

  state = {
    show: false

  }



  render() {
    return (
      <div>
            <h1 className="questions">"Have you recently had unprotected sex?"</h1>
            <div className="q-btns">
              <button className="btn" value="yes">Yes</button>
              <button className="btn" onClick={this.props.handleNoQ1} value="no">No</button>
            </div>

            <h1 className="questions">"Do you have irregular periods?"</h1>
            <div className="q-btns">
              <button className="btn" value="yes">Yes</button>
              <button className="btn" value="no">No</button>
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
