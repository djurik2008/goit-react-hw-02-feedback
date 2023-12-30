import React, { Component } from 'react';

class LeaveFeedback extends Component {
  static defaultButtons = ['good', 'neutral', 'bad'];

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const buttons = LeaveFeedback.defaultButtons.map(name => {
      return (
        <li key={name}>
          <button>{name}</button>
        </li>
      );
    });
    return (
      <div>
        <h2>Please leave Feedback</h2>
        {buttons}
      </div>
    );
  }
}

export default LeaveFeedback;
