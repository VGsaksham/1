import React from 'react';
import './KnurledButton.css';

const KnurledButton = () => {
  return (
    <div className="knurled-button-wrapper">
      <div className="knurled-button-inner">
        <div className="light-ring"></div>
        <span className="button-text">ENTER</span>
        <div className="indicator"></div>
      </div>
    </div>
  );
};

export default KnurledButton;
