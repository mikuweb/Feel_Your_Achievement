import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Progress = () => {
  return (
    <div className='overflow-hidden bg-gradient-to-br from-indigo-300 to-sky-300 h-screen flex flex-col justify-center items-center'>
      <div className='text-white text-3xl lg:text-5xl font-bold m-10 text-center'>
      <Doughnut data={} />
      </div>
      <p className='text-white text-lg lg:text-xl'>We are working on it!</p>
    </div>
  );
};

// const Progress = () => {
//   return (
//     <div className='overflow-hidden bg-gradient-to-br from-indigo-300 to-sky-300 h-screen flex flex-col justify-center items-center'>
//       <div className='text-white text-3xl lg:text-5xl font-bold m-10 text-center'>
//         This page is under construction
//       </div>
//       <p className='text-white text-lg lg:text-xl'>We are working on it!</p>
//     </div>
//   );
// };

export default Progress;
