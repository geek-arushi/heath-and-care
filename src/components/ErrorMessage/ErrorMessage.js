import React from 'react';

const ErrorMessage = ({ message }) => (
  <div className="error-container">
    <div className="error-message">
      <i className="ti-alert"></i>
      <p>{message || 'An error occurred. Please try again.'}</p>
    </div>
  </div>
);

export default ErrorMessage;