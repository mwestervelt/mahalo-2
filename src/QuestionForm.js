import React, { Component } from 'react';

class QuestionForm extends Component {

  render() {
    return (
      <div>
        <form>
          <h1 className="questions">{this.props.question}</h1>
          <button>Yes</button>
          <button>No</button>
        </form>
      </div>
    );
  }

}

export default QuestionForm;
