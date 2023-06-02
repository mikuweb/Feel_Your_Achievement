import Head from 'next/head';
import { Fragment, useState } from 'react';
import LoginBtn from '../components/LoginBtn';
import { useSession } from 'next-auth/react';
import ItemList from '@/components/itemList';
import TodaysAchievement from '@/components/todaysAchievement';
import Calender from '@/components/Calender';
import Spinner from '@/components/Spinner';
import SampleHabits from '@/components/SampleHabits';

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
      value: 'You can add a habit like this',
      isCompleted: false,
      isEditing: false,
    },
    {
      id: Math.random(),
      value: 'Ex: Running',
      isCompleted: false,
      isEditing: false,
    },
  ]);

  const [selectedDay, setSelectedDay] = useState<Date | undefined>();
  const { data: session, status } = useSession();

  if (status === 'loading') return <Spinner />;

  return (
    <Fragment>
      <Head>
        <title>Feel your achievement</title>
        <meta
          name='description'
          content='Track and visualize your daily efforts, and feel a sense of achievement.'
        ></meta>
      </Head>

      <div className='bg-gradient-to-br from-indigo-300 to-sky-300 md:overflow-hidden'>
        {session ? (
          <>
            <div className='bg-white md:max-w-3xl pb-8 md:mx-auto md:my-8 md:px-15'>
              <div className='text-2xl md:text-3xl font-bold pt-3 pl-3 md:pt-10 md:pl-10'>
                Daily check list
              </div>
              <TodaysAchievement itemList={itemList} />
              <Calender
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
              />
              <ItemList itemList={itemList} setItemList={setItemList} />
           <SampleHabits itemList={itemList} setItemList={setItemList}/>
            </div>
          </>
        ) : (
          <div className='h-screen overflow-hidden'>
            <div className='bg-white h-screen md:h-fit md:mt-10 w-full md:max-w-2xl mx-auto text-center py-24 px-8 rounded-lg shadow-lg'>
              <h1 className='text-4xl md:text-5xl font-bold mb-10'>
                Track your habits,
                <br />
                transform your life.
              </h1>
              <p className='text-lg text-slate-600 mb-10'>
                Build better habits, one day at a time. Small steps lead to big
                progress. Be the best version of yourself together!
              </p>
              <LoginBtn
                label={'Get started'}
                style={'bg-blue-900 text-white text-lg py-3 px-7 md:px-4'}
              />
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

// Object destructing
// const obj = {
//   key: 1,
//   name: "Jenny",
//   country: "Korea"
// };
//
// let { key, name, country } = obj;
//
// key
// name
// country
