import React, { Component } from 'react';

class QuestionForm extends Component {

  render() {
    return (
      <div>
        <form>
          <h1 className="questions">{this.props.question}</h1>
          <div className="q-btns">
            <button className="btn">Yes</button>
            <button className="btn">No</button>
          </div>
        </form>
      </div>
    );
  }

}

export default QuestionForm;
