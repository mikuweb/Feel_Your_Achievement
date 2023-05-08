import React from 'react';

import { BiReset } from 'react-icons/bi';
import { ClockProps } from './Timer';
import PauseResumeBtn from './PauseResumeBtn';
import Head from 'next/head';

const StopWatch: React.FC<ClockProps> = ({
  isPaused,
  secondLeft,
  setSecondLeft,
  formatTime,
  handlePause,
  handleResume,
}) => {
  const handleReset = () => {
    if (setSecondLeft) {
      setSecondLeft(0);
    }
  };

  return (
    <>
      <Head>
        <title>{formatTime && formatTime(secondLeft || 0)} Stop watch</title>
      </Head>
      <div className=' mt-20 flex flex-col items-center justify-center '>
        <h1 className='text-white text-8xl mb-5 font-bold'>
          {formatTime && formatTime(secondLeft || 0)}
        </h1>

        <PauseResumeBtn
          isPaused={isPaused}
          handleResume={handleResume}
          handlePause={handlePause}
        />

        <div
          onClick={handleReset}
          className='bg-slate-300 bg-opacity-30 relative rounded-lg w-fit flex gap-2 items-center justify-center py-1 px-2 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer '
        >
          <BiReset size={20} color='white' />
          <p className='text-white'>Reset</p>
        </div>
      </div>
    </>
  );
};

export default StopWatch;
