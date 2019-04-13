import React, { Component } from 'react';
import QuestionForm from './QuestionForm'

class QuestionContainer extends Component {
  state={
    questions: ["Have you recently had unprotected sex?",
    "Do you have irregular periods?"]
  }

  render() {
    return (
      <div>
        <QuestionForm question={this.state.questions[0]} />
        <QuestionForm question={this.state.questions[1]} />
      </div>
    );
  }

}

export default QuestionContainer;
