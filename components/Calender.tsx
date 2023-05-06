import React, { useState, FC } from 'react';
import {
  endOfWeek,
  isWithinInterval,
  startOfWeek,
  format,
  addWeeks,
} from 'date-fns';

import calendarStyles from 'react-day-picker/dist/style.module.css';
import { DayPicker, Row, RowProps, ClassNames } from 'react-day-picker';
import styles from '../styles/components/calendar.module.css';

interface CalenderProps {
  selectedDay: Date | undefined;
  setSelectedDay: (date: Date | undefined) => void;
}

const Calender: FC<CalenderProps> = ({ selectedDay, setSelectedDay }) => {
  const [selectedWeekOffset, setSelectedWeekOffset] = useState<number>(0); // <<: -1, >>: +1

  const CurrentWeekRow = (props: RowProps) => {
    const isDateInCurrentWeek = (dateToCheck: Date) => {
      const today = new Date();
      const dayOfInterest = addWeeks(today, selectedWeekOffset); // what you want: today + selectedWeekOffset * weeks

      const start = startOfWeek(dayOfInterest);
      const end = endOfWeek(dayOfInterest);

      return isWithinInterval(dateToCheck, { start, end }); // returns true if dateToCheck is within these two dates, false otherwise
    };

    const isNotCurrentWeek = props.dates.every(
      (date) => !isDateInCurrentWeek(date)
    );
    if (isNotCurrentWeek) return <></>;
    return <Row {...props} />;
  };

  const onSelectChange = (date: Date | undefined) => {
    setSelectedDay(date);
  };

  const handleBack = () => {
    setSelectedWeekOffset(selectedWeekOffset - 1);
  };

  const handleNext = () => {
    setSelectedWeekOffset(selectedWeekOffset + 1);
  };

  const classNames: ClassNames = {
    ...calendarStyles,
    months: styles.months,
    table: styles.table,
    day: styles.day,
  };
  console.log(selectedWeekOffset);
  return (
    <div className='flex flex-col items-center'>
      {selectedDay && `Day ${format(selectedDay, 'd')},`}
      <DayPicker
        mode='single'
        selected={selectedDay}
        showOutsideDays
        month={addWeeks(new Date(), selectedWeekOffset)} //"month" controls the displayed month / today + selectedWeekOffset
        classNames={classNames}
        modifiersClassNames={{
          selected: styles.selected,
          //ctrl + space
        }}
        onSelect={onSelectChange}
        components={{
          Row: CurrentWeekRow,
        }}
        disableNavigation={true}
      />
      <div className='flex'>
        <button
          className='relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-500 hover:bg-opacity-10 cursor-pointer transition '
          onClick={handleBack}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5'
            />
          </svg>
        </button>
        <button
          className='relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-500 hover:bg-opacity-10 cursor-pointer transition '
          onClick={handleNext}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Calender;
