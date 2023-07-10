import React, { useState, useEffect } from 'react';

const Timer = ({ endTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function getTimeRemaining() {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  return (
    <div className='flex justify-between md:w-2/3'>
      <div className='text-4xl'>{timeRemaining.days}d:</div>
      <div className='text-4xl'>{timeRemaining.hours}h:</div>
      <div className='text-4xl'>{timeRemaining.minutes}m:</div>
      <div className='text-4xl text-yellow-600'>{timeRemaining.seconds}s</div>
    </div>
  );
};

export default Timer;
