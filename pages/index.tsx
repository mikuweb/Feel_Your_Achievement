import Head from 'next/head';
import { Fragment, useState } from 'react';
import LoginBtn from '../components/LoginBtn';
import { useSession } from 'next-auth/react';
import ItemList from '@/components/itemList';
import TodaysAchievement from '@/components/todaysAchievement';
import Calender from '@/components/Calender';
import Spinner from '@/components/Spinner';

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
        <div className='bg-white md:max-w-3xl md:mx-auto md:mt-8 md:mb-8 md:px-15'>
          <div className='text-2xl md:text-3xl font-bold pt-3 pl-3 md:pt-10 md:pl-10'>
            Daily check list
          </div>
          <LoginBtn />
          {session ? (
            <>
              <div className='w-72 md:w-96 mx-auto py-5'></div>
              <TodaysAchievement itemList={itemList} />
              <Calender
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
              />
              <ItemList itemList={itemList} setItemList={setItemList} />
            </>
          ) : (
            <div>
              Top page before user logs in
              <LoginBtn />
            </div>
          )}
        </div>
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
