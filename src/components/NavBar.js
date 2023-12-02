import { useState } from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Brand /> */}
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {/* <Hamburger /> */}
          {showNavbar ? 'Close Menu' : 'Open Menu'}
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Blog</p>
            </li>
            <li>
              <p>Projects</p>
            </li>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
