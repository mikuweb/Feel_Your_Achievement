import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const Time = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [meridiem, setMeridiem] = useState<string>('');

  const formatCurrentTime = () => {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    setCurrentTime(
      `${hour > 12 ? hour - 12 : hour}:${min < 10 ? '0' : ''}${min}`
    );
    setMeridiem(`${hour > 12 ? 'pm' : 'am'}`);
  };

  useEffect(() => {
    const time = setInterval(formatCurrentTime, 1000);
    return () => clearInterval(time);
  }, []);

  return (
    <>
      <Head>
        <title>Clock</title>
      </Head>
      <div className=' mt-20 flex items-baseline justify-center gap-2 '>
        <h1 className='text-white text-8xl md:text-9xl mb-5 font-bold'>
          {currentTime}
        </h1>
        <span className='text-white text-4xl font-bold'>{meridiem}</span>
      </div>
    </>
  );
};

export default Time;
