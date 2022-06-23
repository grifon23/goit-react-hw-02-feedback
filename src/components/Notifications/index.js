import React from 'react';

import { PropTypes } from 'prop-types';

export const Notification = ({ message }) => (
  <div style={{ fontSize: 20 }}>{message}</div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
