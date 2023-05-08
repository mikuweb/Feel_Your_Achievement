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
    <div className='py-3 px-12 w-fit flex flex-col justify-center md:gap-2 md:mb-5 bg-gradient-to-br from-blue-700 to-indigo-900 text-center mx-auto rounded-3xl text-white'>
      <p className='text-xl font-bold'>Hello, Usename!</p>
      <p className='text-base md:text-lg'>{`${day}, ${month} ${date}`}</p>
      <p className='text-2xl font-bold md:text-3xl'> {message}</p>
    </div>
  );
};

export default TodaysAchievement;
