import { useRouter } from 'next/router';
import React from 'react';
import { IoIosTimer } from 'react-icons/io';
import { MdChecklist } from 'react-icons/md';

const Footer = () => {
  const router = useRouter();

  const handleList = () => {
    console.log('List');
  };

  const handleTime = () => {
    console.log('Time');
    router.push('/clock');
  };
  return (
    <div className='w-full flex items-center bg-blue-50 h-20 lg:mb-20 '>
      <div className='flex items-center justify-around w-96 mx-auto'>
        <div
          onClick={handleList}
          className='relative rounded-full h-14 w-14 lg:h-auto lg:w-auto flex items-center justify-center gap-1 p-4 hover:bg-slate-500 hover:bg-opacity-10 cursor-pointer transition '
        >
          <MdChecklist size={27} />
          <p className='hidden lg:block'>Check list</p>
        </div>

        <div
          onClick={handleTime}
          className='relative rounded-full h-14 w-14 lg:h-auto lg:w-auto flex items-center justify-center gap-1 p-4 hover:bg-slate-500 hover:bg-opacity-10 cursor-pointer transition '
        >
          <IoIosTimer size={27} />
          <p className='hidden lg:block'>Clock</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
