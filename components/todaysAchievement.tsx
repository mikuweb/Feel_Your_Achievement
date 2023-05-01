import { ItemType } from '@/pages';
import React, { FC } from 'react';

interface TodaysAchievementProps {
  itemList: ItemType[];
}

const TodaysAchievement: FC<TodaysAchievementProps> = ({ itemList }) => {
  const current = new Date();
  const monthArr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = monthArr[current.getMonth()];
  const date = current.getDate();
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const day = weekday[current.getDay()];

  const numOfCompletedItem = itemList.filter(
    (item) => item.isCompleted === true
  ).length;

  const message =
    numOfCompletedItem === 0
      ? "Let's do your best!"
      : numOfCompletedItem === itemList.length
      ? 'All tasks completed!'
      : `${numOfCompletedItem} Tasks Achieved!`;

  return (
    <div className='bg-blue-950 text-center mx-auto rounded-3xl text-white p-10 w-72 lg:w-96 h-28 lg:h-32 flex flex-col justify-center gap-2'>
      <p className='text-base lg:text-lg'>{`${day}, ${month} ${date}`}</p>
      <p className='text-lg font-bold lg:text-3xl'> {message}</p>
    </div>
  );
};

export default TodaysAchievement;
