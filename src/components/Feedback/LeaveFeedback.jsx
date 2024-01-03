import React, { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class LeaveFeedback extends Component {
  static defaultOptionButtons = ['good', 'neutral', 'bad'];

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };

  totalFedbacks;

  render() {
    const buttons = LeaveFeedback.defaultOptionButtons;
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave Feedback">
          <FeedbackOptions buttons={buttons} handleFn={this.handleClick} />
        </Section>
        <Section title="Statistics">
          <Statistics good={good} bad={bad} neutral={neutral} />
        </Section>
      </>
    );
  }
}

export default LeaveFeedback;
