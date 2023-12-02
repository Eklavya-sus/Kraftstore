import { useState, useEffect } from 'react';
import logo from './assets/logo.jpg';
import list from './assets/list.png';
import search from './assets/search.png';
import bag from './assets/bag.png';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');

    if (showNavbar) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'unset';
    }

    // Cleanup function to revert styles on unmount or when showNavbar changes
    return () => {
      body.style.overflow = 'unset';
    };
  }, [showNavbar]);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="bg-black text-white text-center h-auto p-1 md:p-2 md:text-xl">
        Free Shiping on All Orders!!
      </div>
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={list} alt="menu" />
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Shop TheKraftCloset</p>
            </li>
            <li>
              <p>About us</p>
            </li>
            <li>
              <p>Contact us</p>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 md:gap-6 md:w-6 w-4">
          <img src={search} alt="search" />
          <img src={bag} alt="bag" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
