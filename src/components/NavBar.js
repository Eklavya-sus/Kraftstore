'use client'
import React, { useState } from 'react';
// import searchIcon from './assests/search.png';
// import bagIcon from './assests/bag.png';
import logo from '../components/assests/logo.jpg';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Header */}
      <div className='text-center text-xs lg:text-sm font-light text-[#f5efe3] bg-[#956f5a] uppercase tracking-wide py-1'>Welcome to our store!</div>
      {/* Horizontal Rule (visible on medium and larger screens) */}
      <hr className='border-1 border-[#C2A293] block' />
      {/* Navbar */}
      <div className='bg-[#956f5a] w-full md:h-56 flex flex-col md:flex-row items-center justify-center font-montserrat text-base font-normal leading-normal relative sm:pb-10 h-[140px]'>
      <img className="lg:w-48 rounded-full w-32" src={logo} alt="logo" />
        <div className={`w-full lg:w-1/2 text-[#f5efe3] lg:flex lg:justify-around lg:items-center lg:space-x-4 absolute top-full left-0 right-0 bg-[#956f5a] lg:bg-transparent z-50 ${isOpen ? 'flex flex-col' : 'hidden'} lg:relative lg:flex-row lg:visible lg:top-0 w-full lg:z-0`}>
            <p className='py-2 lg:py-0 px-4 lg:px-0 text-center lg:text-left text-lg  hover:underline hover:cursor-pointer'>Home</p>
            <p className='py-2 lg:py-0 px-4 lg:px-0 text-center lg:text-left text-lg  hover:underline hover:cursor-pointer'>Shop TheKraftCloset</p>
            <p className='py-2 lg:py-0 px-4 lg:px-0 text-center lg:text-left text-lg  hover:underline hover:cursor-pointer'>FAQs</p>
            <p className='py-2 lg:py-0 px-4 lg:px-0 text-center lg:text-left text-lg  hover:underline hover:cursor-pointer'>About us</p>
            <p className='py-2 lg:py-0 px-4 lg:px-0 text-center lg:text-left text-lg  hover:underline hover:cursor-pointer'>Contact Us</p>
          </div>
          {/* section 3 */}
          {/* <div className='w-8 lg:w-6 flex md:justify-end gap-6 lg:pt-0 pt-6 justify-center mt-48 -mr-20'>
          <img src={searchIcon} alt="search" />
          <img src={bagIcon} alt="bag" /> */}
        </div>
        {/* Mobile Menu Toggle */}
        <div className='lg:hidden absolute top-3 right-3 text-[#f5efe3]' onClick={toggleMenu}>
          <svg
            className='w-6 h-6 cursor-pointer'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            {isOpen ? (
              <path d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path d='M4 6h16M4 12h16m-7 6h7' />
            )}
          </svg>
        </div>
      </div>
  );
}
