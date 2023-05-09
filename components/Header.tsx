import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const router = useRouter();
  const handleList = () => {
    router.push('/');
  };
  const handleClock = () => {
    router.push('/clock');
  };

  const toggleMenu = () => {
    setOpenMenu((preClick) => !preClick);
    console.log(openMenu);
  };

  const menuClassName = openMenu ? 'top-[44px]' : 'top-[-100%]';

  return (
    <nav className='bg-blue-900 h-11 flex justify-between items-center px-6'>
      {/* LOGO */}
      <div className='text-white text-lg md:text-2xl font-bold '>
        Feel Your Achievement
      </div>
      {/* LINK ITEMS */}
      <div
        className={`${menuClassName} duration-500 md:static absolute bg-blue-900 bg-opacity-90 md:min-h-fit min-h-[60vh] left-0 w-full md:w-auto flex items-center px-5`}
      >
        <ul className='flex flex-col md:flex-row md:items-center justify-end gap-8 md:gap-4'>
          <li>
            <div
              className='text-white rounded-full py-1 px-2 hover:border-2 active:border-2 active:border-cyan-400 uppercase cursor-pointer'
              onClick={handleList}
            >
              check list
            </div>
          </li>
          <li>
            <div
              className='text-white rounded-full py-1 px-2 hover:border-2 active:border-2 active:border-cyan-400 uppercase cursor-pointer'
              onClick={handleClock}
            >
              clock
            </div>
          </li>
        </ul>
      </div>
      {/* MENU ICON */}
      <div onClick={toggleMenu} className='md:hidden cursor-pointer'>
        {openMenu ? (
          <BiX color='white' size={28} />
        ) : (
          <BiMenu color='white' size={28} />
        )}
      </div>
    </nav>
  );
}
