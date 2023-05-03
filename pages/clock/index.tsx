import Timer from '@/components/Timer';
import React, { Fragment, useEffect, useState } from 'react';
// import * as Dialog from '@radix-ui/react-dialog';
import { BsStopwatch, BsHourglassSplit } from 'react-icons/bs';
import { BiReset } from 'react-icons/bi';

// TODO CREATE COMPONENTS: STOPWATCH

const Clock = () => {
  const [secondLeft, setSecondLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [endTime, setEndTime] = useState('');
  const [customTimer, setCustomTimer] = useState<number | undefined>();
  const [mode, setMode] = useState(''); // "stopwatch" | "timer"

  //-------------
  // STOP WATCH
  //-------------
  const handleStopWatch = () => {
    setMode('stopwatch');
    setSecondLeft(0);
  };

  //-------------
  // TIMER
  //-------------
  const huddleCountdown = (minutes: number | undefined) => {
    if (!minutes) return; //minutes === undefined
    setSecondLeft(minutes * 60);

    // Display Endtime
    const now = Date.now();
    const then = now + minutes * 60 * 1000;
    formatEndTime(then);
  };

  const handlePause = () => {
    setIsPaused(true);
    console.log(isPaused);
  };

  const handleResume = () => {
    setSecondLeft(secondLeft);
    setIsPaused(false);
  };

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (mode === 'stopwatch' && !isPaused) {
      timer = setInterval(() => {
        setSecondLeft((preTime) => preTime + 1);
      }, 1000);
    } else if (secondLeft > 0 && !isPaused) {
      timer = setInterval(() => {
        setSecondLeft((preTime) => preTime - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [secondLeft, isPaused, mode]);

  const formatTime = (minutes: number) => {
    const min = Math.floor(minutes / 60);
    const sec = minutes % 60;
    return `${min.toString().padStart(2, '0')}:${sec
      .toString()
      .padStart(2, '0')}`;
  };

  const formatEndTime = (timestamp: number) => {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const min = end.getMinutes();
    setEndTime(
      `End time⏰ at ${hour > 12 ? hour - 12 : hour}:${
        min < 10 ? '0' : ''
      }${min} ${hour > 12 ? 'pm' : 'am'}`
    );
  };

  return (
    <Fragment>
      <div className='overflow-hidden bg-gradient-to-br from-indigo-300 to-sky-300 h-screen'>
        <div className='m-10'>Clock</div>
        {/* Container */}
        <div className='max-w-7xl  flex flex-col items-center mx-auto'>
          {/* Menu bar */}
          <div className='w-2/4 min-w-fit py-2 rounded-md mx-auto flex items-center justify-around bg-blue-50'>
            <div
              onClick={() => {
                handleStopWatch();
              }}
              className='flex flex-col gap-1 items-center text-blue-900 hover:opacity-30 hover:border-b-2 border-blue-800 cursor-pointer'
            >
              <BsStopwatch size={28} />
              <p className='text-sm'>Stop watch</p>
            </div>

            <div
              onClick={() => {
                setMode('timer');
                huddleCountdown(25);
              }}
              className='flex flex-col gap-1 items-center text-blue-900 hover:opacity-30 hover:border-b-2 border-blue-800 cursor-pointer'
            >
              <BsHourglassSplit size={28} />
              <p className='text-sm'>25 mins</p>
            </div>

            <div
              onClick={() => {
                setMode('timer');
                huddleCountdown(5);
              }}
              className='flex flex-col gap-1 items-center text-blue-900 hover:opacity-30 hover:border-b-2 border-blue-800 cursor-pointer'
            >
              <BsHourglassSplit size={28} />
              <p className='text-sm'>5 mins</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setMode('timer');
                setIsPaused(false);
                huddleCountdown(customTimer);
                setCustomTimer(undefined);
              }}
            >
              <input
                placeholder='Type Minutes'
                value={customTimer ?? ''} //?? is almost the same as: customTimer ? customTimer : ""
                onChange={(e) => setCustomTimer(parseInt(e.target.value))}
                type='number'
                min='1'
                max='60'
              />
            </form>
            {/* <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <div className='hover:bg-blue-100 hover:rounded-md hover:border-none  py-1 px-2 border-b-2 border-b-blue-500 cursor-pointer'>
                  Custom
                </div>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay
                  className='
                overflow-x-hidden
                overflow-y-auto
                fixed
                inset-0
                z-50
                bg-neutral-800
                bg-opacity-70
                '
                />
                <Dialog.Content
                  className='
                h-full lg:h-auto max-w-md p-6 fixed bg-white rounded-md shadow-lg transition
                '
                >
                  <Dialog.Title className=''>Custom Timer</Dialog.Title>
                  <Dialog.Description>
                    Type in minutes you want to timer.
                  </Dialog.Description>

                  <fieldset className=''>
                    <label className='' htmlFor='name'>
                      Minutes
                    </label>
                    <input className='' id='name' defaultValue='30' />
                  </fieldset>

                  <div className='flex mt-6 justify-end'>
                    <Dialog.Close asChild>
                      <button className=''>Save changes</button>
                    </Dialog.Close>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root> */}
          </div>
          {mode === 'timer' && (
            <Timer
              isPaused={isPaused}
              secondLeft={secondLeft}
              endTime={endTime}
              formatTime={formatTime}
              handlePause={handlePause}
              handleResume={handleResume}
            />
          )}
          {/* STOP WATCH */}
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
        </div>
      </div>
    </Fragment>
  );
};

export default Clock;