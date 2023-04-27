import React, { useState, FC } from 'react';

import 'react-day-picker/dist/style.css';

import {
  endOfWeek,
  isWithinInterval,
  startOfWeek,
  format,
} from "date-fns";

import {
  DayPicker,
  Row,
  RowProps,
} from 'react-day-picker';

interface Props {

}

const Calender: FC<Props> = () => {

  const [selectedDay, setSelectedDay] = useState<string>();

  const CurrentWeekRow = (props: RowProps) => {

    const isDateInCurrentWeek = (dateToCheck: Date) => {
      const today = new Date();
      const start = startOfWeek(today);
      const end = endOfWeek(today);
      return isWithinInterval(dateToCheck, { start, end });
    }

    const isNotCurrentWeek = props.dates.every(date => !isDateInCurrentWeek(date));
    if (isNotCurrentWeek) return <></>
    return <Row {...props}/>
  }

  const onSelectChange = (date: any) => {
    const formDate = format(date, 'd');
    setSelectedDay(formDate);
  };

  return (
    <div>
      {selectedDay}
      <DayPicker
        mode="single"
        showOutsideDays
        onSelect={onSelectChange}
        components={{
          Row: CurrentWeekRow,
        }}
      />
    </div>
  )
}

export default Calender;