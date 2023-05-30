import React from 'react';
import { ideas } from '../constants/constants';
import Image from 'next/image';

const SampleHabits = () => {
  return (
    <div className='border-2 w-full'>
      <div className='border-2 w-11/12 mx-auto h-auto mb-10'>
      <p className='font-semibold text-xl my-4'>Habit ideas for you</p>
      <div className=' gap-3 md:gap-5 grid grid-cols-2 md:grid-cols-3'>
        {ideas.map((idea) => (
          <div key={idea.id} className='border-2  py-3 md:py-6 rounded-lg flex flex-col items-center'>
            <div className='text-xl mb-4'>{idea.title}</div>
            <div ><Image className='w-40 h-40' src={idea.image} alt={idea.title}/></div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default SampleHabits;
