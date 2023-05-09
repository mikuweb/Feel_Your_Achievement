import React from 'react';
import PauseResumeBtn from './PauseResumeBtn';
import Head from 'next/head';

export interface ClockProps {
  isPaused: boolean;
  secondLeft?: number;
  setSecondLeft?: (value: React.SetStateAction<number>) => void;
  endTime?: string;
  formatTime?: (minutes: number) => string;
  handlePause: () => void;
  handleResume: () => void;
}

const Timer: React.FC<ClockProps> = ({
  isPaused,
  secondLeft,
  endTime,
  formatTime,
  handlePause,
  handleResume,
}) => {
  return (
    <>
      <Head>
        <title>{formatTime && formatTime(secondLeft || 0)} Timer</title>
      </Head>
      <div className=' mt-20 flex flex-col items-center justify-center '>
        <h1 className='text-white text-8xl mb-5 font-bold'>
          {formatTime && formatTime(secondLeft || 0)}
        </h1>
        <p className='text-white text-2xl font-semibold'>{endTime}</p>

        <PauseResumeBtn
          isPaused={isPaused}
          handleResume={handleResume}
          handlePause={handlePause}
        />
      </div>
    </>
  );
};

export default Timer;
