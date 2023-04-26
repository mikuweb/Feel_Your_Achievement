import React from "react";

const ThisWeek = () => {
  return (
    <div className="py-10 mx-auto w-72 lg:w-3/4 border-b-2 border-blue-100 ">
      <ul className="flex gap-6  overflow-x-scroll">
        <li className="w-16 h-20 rounded-2xl shadow-md flex flex-col items-center justify-center">
          <p className="date">17</p>
          <p>Mon</p>
        </li>
        <li className="w-16 h-20 rounded-2xl shadow-md flex flex-col items-center justify-center">
          <p>18</p>
          <p>Tue</p>
        </li>
        <li className="w-16 h-20 rounded-2xl shadow-md flex flex-col items-center justify-center">
          <p>19</p>
          <p>Wed</p>
        </li>
        <li className="w-16 h-20 rounded-2xl shadow-md flex flex-col items-center justify-center">
          <p>20</p>
          <p>Thu</p>
        </li>
        <li className="w-16 h-20 rounded-2xl shadow-md flex flex-col items-center justify-center">
          <p>21</p>
          <p>Fri</p>
        </li>
        <li className="w-16 h-20 rounded-2xl shadow-md flex flex-col items-center justify-center">
          <p>22</p>
          <p>Sat</p>
        </li>
        <li className="w-16 h-20 rounded-2xl shadow-md flex flex-col items-center justify-center">
          <p>23</p>
          <p>Sun</p>
        </li>
      </ul>
    </div>
  );
};

export default ThisWeek;
