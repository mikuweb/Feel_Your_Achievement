import Greeting from "@/components/greeting";
import ItemList from "@/components/itemList";
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

      <Greeting />

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

        <ItemList />
      
      </main>
    </Fragment>
  );
}
