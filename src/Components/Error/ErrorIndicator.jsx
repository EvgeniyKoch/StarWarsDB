import React from 'react';
import './ErrorIndicator.css';
import icon from './star-error.jpeg';

const  ErrorIndicator = () => {
  return (
    <div className="error-indicator">
     <img src={icon} alt=""/>
      <span className="boom">BOOM! </span>
      <span> Something has gone terribly wrong</span>
      <span> (but we already sent droids to fix it)</span>
    </div>
  )
};

export default ErrorIndicator;