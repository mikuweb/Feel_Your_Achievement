import React, { useEffect, useState } from 'react';

const Time = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [meridiem, setMeridiem] = useState('');

  const formatCurrentTime = () => {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    setCurrentTime(
      `${hour > 12 ? hour - 12 : hour}:${min < 10 ? '0' : ''}${min}`
    );
    setMeridiem(`${hour > 12 ? 'pm' : 'am'}`);
  };

  useEffect(() => formatCurrentTime, []);

  return (
    <div className=' mt-20 flex items-baseline justify-center gap-2 '>
      <h1 className='text-white text-8xl mb-5 font-bold'>{currentTime}</h1>
      <span className='text-white text-2xl font-bold'>{meridiem}</span>
    </div>
  );
};

export default Time;
