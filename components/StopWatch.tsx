import React from 'react';

import { BiReset } from 'react-icons/bi';

interface StopWatchProps {
  isPaused: boolean;
  secondLeft: number;
  setSecondLeft: (value: React.SetStateAction<number>) => void;
  formatTime: (minutes: number) => string;
  handlePause: () => void;
  handleResume: () => void;
}

const StopWatch: React.FC<StopWatchProps> = ({
  isPaused,
  secondLeft,
  setSecondLeft,
  formatTime,
  handlePause,
  handleResume,
}) => {
  return (
    <div className=' mt-20 flex flex-col items-center justify-center '>
      <h1 className='text-white text-8xl mb-5 font-bold'>
        {formatTime(secondLeft)}
      </h1>

      <div className='mt-10 mb-5'>
        {isPaused ? (
          <div
            onClick={handleResume}
            className='bg-slate-300 bg-opacity-30 relative rounded-full  h-20 w-20 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer '
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              color='white'
              className='w-14 h-14'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
              />
            </svg>
          </div>
        ) : (
          <div
            onClick={handlePause}
            className='bg-slate-300 bg-opacity-30 relative rounded-full h-20 w-20 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer '
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              color='white'
              className='w-14 h-14'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 5.25v13.5m-7.5-13.5v13.5'
              />
            </svg>
          </div>
        )}
      </div>

      <div
        onClick={() => setSecondLeft(0)}
        className='bg-slate-300 bg-opacity-30 relative rounded-lg w-fit flex gap-2 items-center justify-center py-1 px-2 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer '
      >
        <BiReset size={20} color='white' />
        <p className='text-white'>Reset</p>
      </div>
    </div>
  );
};

export default StopWatch;
