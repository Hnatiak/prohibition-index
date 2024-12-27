import React from 'react';
import './ErrorOverlay.css';

export const ErrorOverlay = ({ error, onClose }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <p><strong>Rule Violation</strong></p>
        <p>{error}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};