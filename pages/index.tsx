import ItemList from '@/components/itemList';
import TodaysAchievement from '@/components/todaysAchievement';
import Calender from '@/components/Calender';
import Head from 'next/head';
import { Fragment, useState } from 'react';
import Footer from '@/components/Footer';

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
      value: 'Studying Next.js',
      isCompleted: false,
      isEditing: false,
    },
    {
      id: Math.random(),
      value: 'Running',
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

      <div className='bg-gradient-to-br from-indigo-300 to-sky-300 lg:overflow-hidden'>
        {/* Lg-screen */}
        <div className='hidden lg:block text-white text-5xl font-bold mx-10 my-5'>
          Daily check list
        </div>
        {/* Sm-screen */}
        <div className='bg-white lg:max-w-3xl lg:mx-auto lg:mt-8 lg:px-15'>
          <div className='text-blue-200 lg:hidden text-3xl font-bold m-5'>
            Daily check list
          </div>
          <div className='w-72 lg:w-96 mx-auto py-5'>
            <h1 className='text-xl font-bold text-blue-950 lg:mt-4'>
              Hello, Usename!
            </h1>
          </div>
          <TodaysAchievement itemList={itemList} />
          <Calender selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
          <ItemList itemList={itemList} setItemList={setItemList} />
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}
