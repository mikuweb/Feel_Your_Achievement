import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Feel your achievement</title>
        <meta
          name="description"
          content="Track and visualize your daily efforts, and feel a sense of achievement."
        ></meta>
      </Head>

      <div className="px-10 py-10">
        <h1 className="text-xl font-bold text-blue-950">Hello, Sho!</h1>
      </div>

      <main className="text-center px-10">
        <div className="bg-blue-950 rounded-3xl text-white p-10 w-72 h-28 flex flex-col justify-center">
          <p className="text-sm">Tuesday, April 18</p>
          <p className="text-lg font-bold">3/5 Tasks achieved</p>
        </div>

        <div className="py-10 mx-10 border-b-2 border-blue-100">
          <ul className="flex gap-6">
            <li className="date-card">
              <p className="date">17</p>
              <p>Mon</p>
            </li>
            <li className="date-card">
              <p>18</p>
              <p>Tue</p>
            </li>
            <li className="date-card">
              <p>19</p>
              <p>Wed</p>
            </li>
            <li className="date-card">
              <p>20</p>
              <p>Thu</p>
            </li>
            <li className="date-card">
              <p>21</p>
              <p>Fri</p>
            </li>
            <li className="date-card">
              <p>22</p>
              <p>Sat</p>
            </li>
            <li className="date-card">
              <p>23</p>
              <p>Sun</p>
            </li>
          </ul>
        </div>

        <div className="py-10">
          <ul>
            <li className="flex justify-between gap-5 items-center my-5">
              <div className="bg-blue-50 rounded-2xl drop-shadow-lg text-blue-950 p-3.5 w-72 h-14 flex items-center">
                <p className="font-bold">Studing Next.js</p>
              </div>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </p>
            </li>
            <li className="flex justify-between gap-5 items-center my-5">
              <div className="bg-blue-50 rounded-2xl drop-shadow-lg text-blue-950 p-3.5 w-72 h-14 flex items-center">
                <p className="font-bold">Running</p>
              </div>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </p>
            </li>
          </ul>
        </div>

        <div className="">
          <button className="mx-auto w-60 flex gap-2 item-center justify-center bg-blue-600 text-white rounded-full py-2 px-3 uppercase text-xs font-bold curser-pointer tracking-wider">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>Create new item</p>
          </button>
        </div>
      </main>
    </Fragment>
  );
}
