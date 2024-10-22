// src/app/about/components/Popup.js
import React from 'react';
import './Popup.css';

const Popup = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose} class = "popup-btn-after">Close</button>
      </div>
    </div>
  );
};

export default Popup;
