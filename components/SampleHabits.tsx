import React, { FormEvent } from 'react';
import { ideas } from '../constants/constants';
import Image from 'next/image';
import { ItemType } from '@/pages';

interface SampleHabitsProps {
  itemList: ItemType[];
  setItemList: (value: ItemType[]) => void;
}
const SampleHabits: React.FC<SampleHabitsProps> = ({
  itemList,
  setItemList,
}) => {
  const handleAddItem = (e: FormEvent<HTMLDivElement>, value: string) => {
    e.preventDefault();
    const newItemList = [
      ...itemList,
      {
        id: Math.random(),
        value: value,
        isCompleted: false,
        isEditing: false,
      },
    ];
    setItemList(newItemList);
  };

  return (
    <div className='w-full'>
      <div className='w-11/12 mx-auto h-auto mb-10'>
        <p className='font-semibold w-fit text-xl my-5 text-center py-1 px-5 bg-blue-50 border-l-4 border-blue-200'>Habit ideas for you</p>
        <div className='px-3 md:px-6 gap-3 md:gap-5 grid grid-cols-2 md:grid-cols-3'>
          {ideas.map((idea) => (
            <div
              onClick={(e) => handleAddItem(e, idea.title)}
              key={idea.id}
              className='hover:scale-105 hover:bg-slate-50 py-3 md:py-6 rounded-lg flex flex-col items-center cursor-pointer shadow-lg transition active:border-2 border-cyan-400'
            >
              <div className='text-xl mb-4'>{idea.title}</div>
              <div>
                <Image
                  className='w-40 h-40'
                  src={idea.image}
                  alt={idea.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SampleHabits;
