import React from 'react';

const Spinner = () => {
  return (
    <div className='bg-gradient-to-br from-indigo-300 to-sky-300 h-screen'>
      <div
        className=' absolute top-1/2 left-1/2'
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className='spinner spinner1'></div>
      </div>
    </div>
  );
};

export default Spinner;
