// ProgressBar.jsx

import { useState, useEffect } from 'react';

const ProgressBar = ({ label, percentage, duration }) => {
  const [progress, setProgress] = useState(0);
  const fixedWidthIncrease = 10;
  // const marginLeft = 120; // Adjust the fixed width increase as needed

  useEffect(() => {
    const steps = Math.ceil(percentage / fixedWidthIncrease);
    const stepWidth = fixedWidthIncrease / percentage * 100;

    const interval = setInterval(() => {
      setProgress(prevProgress => Math.min(prevProgress + stepWidth, percentage));
    }, duration / steps);

    return () => clearInterval(interval);
  }, [duration, fixedWidthIncrease, percentage]);

  const progressBarStyle = {
    backgroundColor: 'goldenrod',
    borderRadius: '4px',
    overflow: 'hidden',
    height: '20px',
    width: `${progress}%`,
    // marginLeft: `${marginLeft}px`,
    transition: 'width 0.5s ease-in-out',

  };

  return (
    <div className="mb-8">
      <div className="flex gap-4 w-1/2 mx-auto mb-4">
        <p>{label}</p>
        <div className="flex flex-col items-start w-1/2">
          <div style={progressBarStyle}></div>
        </div>
        <p>{progress}</p>

      </div>

    </div>
  );
};

export default ProgressBar;
