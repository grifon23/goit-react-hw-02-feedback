import React from 'react';

import { PropTypes } from 'prop-types';

import styles from './style.css';

export const FeedbackOptions = ({ handleFeedback, options }) => {
  return (
    <div className={styles.controlsContainer}>
      {options.map(option => {
        return (
          <button
            className={styles.control}
            key={option}
            onClick={() => handleFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
