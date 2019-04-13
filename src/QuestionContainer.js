import React, { Component } from 'react';
import Dropdown from './Dropdown'

class QuestionContainer extends Component {

  state = {
    show: false

  }



  render() {
    return (
      <div>
        <div>

            <h1 className="questions">"Have you recently had unprotected sex?"</h1>
            <button value="yes">Yes</button>
            <button onClick={this.props.handleNoQ1} value="no">No</button>

          <form>
            <h1 className="questions">"Do you have irregular periods?"</h1>
            <button value="yes">Yes</button>
            <button value="no">No</button>
          </form>
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
