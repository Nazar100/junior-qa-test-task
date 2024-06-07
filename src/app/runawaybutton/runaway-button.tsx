import React, { useState } from 'react';
import './run.css';

const RunawayButton = () => {
  const [position, setPosition] = useState({ top: 50, left: 50 });

  const handleMouseEnter = () => {
    const newTop = Math.random() * (window.innerHeight - 50);
    const newLeft = Math.random() * (window.innerWidth - 100);
    setPosition({ top: newTop, left: newLeft });
  };

  return (
    <button 
      className="runaway-button" 
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
      onMouseEnter={handleMouseEnter}
    >
      GET A JOB!
    </button>
  );
};

export default RunawayButton;