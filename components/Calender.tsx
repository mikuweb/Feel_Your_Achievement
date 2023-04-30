import React, { useState, FC } from "react";
import { endOfWeek, isWithinInterval, startOfWeek, format } from "date-fns";

import calendarStyles from "react-day-picker/dist/style.module.css";
import { DayPicker, Row, RowProps, ClassNames } from "react-day-picker";
import styles from "./calendar.module.css";

interface CalenderProps {
  selectedDay: Date | undefined;
  setSelectedDay: (date: Date | undefined) => void;
}

const Calender: FC<CalenderProps> = ({ selectedDay, setSelectedDay }) => {
  const [weekNumber, setWeekNumber] = useState<number>();

  const CurrentWeekRow = (props: RowProps) => {
    const isDateInCurrentWeek = (dateToCheck: Date) => {
      const today = new Date();
      const start = startOfWeek(today);
      const end = endOfWeek(today);
      return isWithinInterval(dateToCheck, { start, end });
    };

    //↓filter functionにかえる
    // 1.depends on the state [isSelectedweek]
    // 2.月が替わったらこれ使ってその月を表示Controlling the current month
    const isNotCurrentWeek = props.dates.every(
      (date) => !isDateInCurrentWeek(date)
    );
    if (isNotCurrentWeek) return <></>;
    return <Row {...props} />;
  };

  const onSelectChange = (date: Date | undefined) => {
    setSelectedDay(date);
  };

  const handleBack = (e: any) => {
    console.log(e);
  };

  const handleNext = (e: any) => {
    console.log(e);
  };

  const classNames: ClassNames = {
    ...calendarStyles,
    months: styles.months,
  };
  return (
    <div className="flex flex-col items-center">
      {selectedDay && `Day ${format(selectedDay, "d")},`}
      {weekNumber && ` Week ${weekNumber}`}
      <DayPicker
        mode="single"
        selected={selectedDay}
        showOutsideDays
        classNames={classNames}
        modifiersClassNames={{
          selected: styles.selected,
          //ctrl + space
        }}
        onSelect={onSelectChange}
        showWeekNumber
        onWeekNumberClick={setWeekNumber}
        components={{
          Row: CurrentWeekRow,
        }}
        disableNavigation={true}
      />
      <div className="flex">
        <button onClick={handleBack}>＜</button>
        <button onClick={handleNext}>＞</button>
      </div>
    </div>
  );
};

export default Calender;

//1. hide <>
//2. creatte own <>
//3. you need some state to track which week you want to see (number or date)
//4. connect to own <> buttons
