import Greeting from "@/components/greeting";
import ItemList from "@/components/itemList";
import TodaysAchievement from "@/components/todaysAchievement";
import Calender from "@/components/Calender";
import Head from "next/head";
import { Fragment, useState } from "react";
import Footer from "@/components/Footer";

export interface ItemType {
  id: number;
  value: string;
  isCompleted: boolean;
  isEditing: boolean;
}

export default function Home() {
  const [itemList, setItemList] = useState<ItemType[]>([
    {
      id: Math.random(),
      value: "Studying Next.js",
      isCompleted: false,
      isEditing: false,
    },
    {
      id: Math.random(),
      value: "Running",
      isCompleted: false,
      isEditing: false,
    },
  ]);

  const [selectedDay, setSelectedDay] = useState<Date | undefined>();

  return (
    <Fragment>
      <Head>
        <title>Feel your achievement</title>
        <meta
          name='description'
          content='Track and visualize your daily efforts, and feel a sense of achievement.'
        ></meta>
      </Head>

      <div className="bg-blue-50  lg:overflow-hidden">
        <div className="bg-white px-10 lg:max-w-3xl lg:mx-auto lg:mt-20 lg:px-15">
          <Greeting />
          <TodaysAchievement itemList={itemList} />

          <Calender selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>


          <ItemList itemList={itemList} setItemList={setItemList} />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}
