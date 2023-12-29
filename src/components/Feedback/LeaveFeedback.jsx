import React, { Component } from 'react';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';

class LeaveFeedback extends Component {
  static defaultButtons = ['good', 'neutral', 'bad'];

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const buttons = LeaveFeedback.defaultButtons.map(name => {
      const id = nanoid(3);
      console.log(id);
      return (
        <li key={id}>
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
