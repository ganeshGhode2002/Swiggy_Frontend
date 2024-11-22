import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineHelp } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { FaCartArrowDown } from "react-icons/fa";
import SignIn from './SignIn.jsx';

const Headers = () => {
  const [toggle, settoggle] = useState(false);

  const showMenu = () => {
    settoggle(true);
  };

  const closeMenu = () => {
    settoggle(false);
  };

  const data = [
    {
      icon: <IoSearch />,
      name: "Search"
    },
    {
      icon: <BiSolidOffer />,
      name: "Offers",
      sup: "New"
    },
    {
      icon: <MdOutlineHelp />,
      name: "Help"
    },
    {
      icon: <PiSignInBold />,
      name: "SignIn"
    },
    {
      icon: <FaCartArrowDown />,
      name: "Cart"
    }
  ];

  return (
    <>
      <div className='black_overley fixed  h-full w-full duration-500' onClick={closeMenu} style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? 'visible' : 'hidden',
        zIndex: 9999
      }}>
        <div className='bg-white w-[500px] h-full absolute duration-700' onClick={(e) => {
          e.stopPropagation();
        }} style={{
          left: toggle ? '0%' : '-100%'
        }}>
        </div>
      </div>

      <header className='p-[15px] shadow-xl'>
        <div className='w-full md:w-[1200px] mx-auto flex items-center text-[#686b78]'>
          <div className='w-[100px]'>
            <img src="Images/logo.png" alt="swiggy_logo" className='w-full' />
          </div>

          <div className='flex items-center gap-2'>
            <span className='font-bold text-black border-b-[4px] mr-1 border-black hover:text-orange-400 hover:border-orange-400'>Ratanada</span>
            <span className='text-sm text-gray-600'>Jodhpur, Rajasthan, India</span>
            <RxCaretDown onClick={showMenu} className='inline text-[25px] text-orange-400 cursor-pointer' />
          </div>

          {/* Mobile Menu Toggle Button */}
          <nav className='md:hidden ml-auto'>
            <button onClick={showMenu} className='text-[25px]'>
           
              <RxCaretDown className='text-orange-400' />
            </button>
          </nav>

          {/* Desktop Nav */}
          <nav className='hidden md:flex ml-auto gap-7 font-semibold text-[18px]'>
            {data.map((item, index) => (
              <li key={index} className='flex cursor-pointer items-center hover:text-orange-400 gap-2'>
                {item.icon}
                {item.name}
                <sup className='text-orange-400'>{item.sup}</sup>
              </li>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Headers;
