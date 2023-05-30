import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Progress = () => {
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Completion rate',
      },
    },
    scales: {
      x: {
        type: 'category', // Use the 'category' scale for x-axis
      },
    },
  };

  const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

   const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className='overflow-hidden bg-gradient-to-br from-indigo-300 to-sky-300 h-screen'>
      <div className='bg-white w-full py-10 h-screen md:h-fit'>
      <Bar options={options} data={data} className='w-full md:w-5/6 mx-auto'/>
      </div>
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
