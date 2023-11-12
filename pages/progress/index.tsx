import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Progress = () => {
//   const options = {
//     responsive: true,
//     aspectRatio: 1,
//     plugins: {
//       legend: {
//         position: 'top' as const,
//       },
//       title: {
//         display: true,
//         text: 'Completion rate',
//       },
//     },
//     scales: {
//       x: {
//         type: 'category', // Use the 'category' scale for x-axis
//       },
//       y: {
//         beginAtZero: true
//       }
//     },
//   };

//   const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   const testdata = [20, 50, 10, 90, 40, 30, 80];

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Dataset 1',
//         // data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
//         data:testdata,
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       },
//     ],
//   };

//   return (
//     <div className='overflow-hidden bg-gradient-to-br from-indigo-300 to-sky-300 h-screen'>
//       <div className='bg-white md:max-w-3xl md:mx-auto md:my-8 w-full py-10 h-screen md:h-fit'>
//         <div className='text-2xl md:text-3xl font-bold ml-5 mb-5'>Progress</div>
//         <Bar options={options} data={data} className='mx-auto' />
//       </div>
//     </div>
//   );
// };

const Progress = () => {
  return (
    <div className='overflow-hidden bg-gradient-to-br from-indigo-300 to-sky-300 h-screen flex flex-col justify-center items-center'>
      <div className='text-white text-3xl lg:text-5xl font-bold m-10 text-center'>
        This page is under construction
      </div>
      <p className='text-white text-lg lg:text-xl'>I am working on it!</p>
    </div>
  );
};

export default Progress;
