import Greeting from '@/components/greeting';
import ItemList from '@/components/itemList';
import Head from "next/head";
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Head>
          <title>Feel your achievement</title>
        <meta
          name='description'
          content='Track and visualize your daily efforts, and feel a sense of achievement.'
        ></meta>
      </Head>

                   <div className='bg-blue-50 lg:overflow-hidden'>
                      <div className='bg-white px-10 lg:max-w-3xl lg:mx-auto lg:my-20 lg:px-15'>
          <Greeting />



          <div className='bg-blue-950 text-center mx-auto rounded-3xl text-white p-10 w-72 lg:w-96 h-28 flex flex-col justify-center gap-2'>
            <p className='text-sm lg:text-base'>Tuesday, April 18</p>
            <p className='text-lg font-bold lg:text-2xl'>3/5 Tasks achieved</p>
          </div>

          <div className='py-10 mx-auto w-72 lg:w-3/4 border-b-2 border-blue-100 '>
            <ul className='flex gap-6  overflow-x-scroll'>
              <li className='w-16 h-20 rounded-2xl shadow-md flex flex-col items-center justify-center'>
                <p className='date'>17</p>
                <p>Mon</p>
              </li>
              <li className='w-16 h-20 rounded-2xl shadow-md flex flex-col items-center justify-center'>
                <p>18</p>
                <p>Tue</p>
              </li>
              <li className='w-16 h-20 rounded-2xl shadow-md flex flex-col items-center justify-center'>
                <p>19</p>
                <p>Wed</p>
              </li>
              <li className='w-16 h-20 rounded-2xl shadow-md flex flex-col items-center justify-center'>
                <p>20</p>
                <p>Thu</p>
              </li>
              <li className='w-16 h-20 rounded-2xl shadow-md flex flex-col items-center justify-center'>
                <p>21</p>
                <p>Fri</p>
              </li>
              <li className='w-16 h-20 rounded-2xl shadow-md flex flex-col items-center justify-center'>
                <p>22</p>
                <p>Sat</p>
              </li>
              <li className='w-16 h-20 rounded-2xl shadow-md flex flex-col items-center justify-center'>
                <p>23</p>
                <p>Sun</p>
              </li>
            </ul>
          </div>

          <ItemList />
        </div>
      </div>
    </Fragment>
  );
}
