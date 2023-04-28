import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const router = useRouter();

  const handleList = () => {
    console.log("List");
  };

  const handleTime = () => {
    console.log("Time");
    router.push("/timer");
  };
  return (
    <div className="flex items-center bg-blue-50 h-20 lg:mb-20 ">
      <div className="flex items-center justify-around w-96 mx-auto">
        <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-500 hover:bg-opacity-10 cursor-pointer transition ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            onClick={handleList}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
        <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-500 hover:bg-opacity-10 cursor-pointer transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            onClick={handleTime}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
