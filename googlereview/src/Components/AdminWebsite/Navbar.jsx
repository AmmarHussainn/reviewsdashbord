import React, { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
import { logo, phone, signin } from '../../assets';
// import SvgIcons from '../../assets/SvgIcons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

//   const navigate = useNavigate();

  const handleClick = (path) => {
    // Implement your logic for handling the click event here, e.g., routing to the specified path.
    // You can use React Router or any other routing library you are using.
    // Example: history.push(path);
  };

  return (
    <nav className="bg-[#F3F3F3] py-2 px-4 sticky top-0 z-10 font-poppins">
      <div className="container mx-auto flex items-start md:items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-col">
          <div>
            <a href="/">
              <img src={logo} alt="mcdm" className="w-[200px] " />
            </a>
          </div>
          <div
            className={`md:hidden ${isMenuOpen ? 'flex flex-col' : 'hidden'}`}
          >
           
            <a href="/home" className="text-[#161616] font-bold   block p-2">
              Products
            </a>
            <a href="/aboutus" className="text-[#161616] font-bold   block p-2">
              Partners
            </a>
            <a href="/ourservicespage" className="text-[#161616]  font-bold   block p-2">
              Resources
            </a>
            {/* Add the provided code snippet here for mobile screens */}
            {isMobile && (
              <div className="flex gap-5">
                <span className='flex'>
                    <img src={phone} alt="phone" className='w-5 h-5 mt-2'/>
                    <p className='text-xs mt-3 px-3'>+1-123-456-789</p>
                </span>
                  <button className='flex mx-auto items-center border border-white text-[#161616]  px-2 rounded-lg' onClick={() => handleClick('/signin')}>
              <img src={signin} alt="signin"/>
                  SignIn
                </button>
                <button
                  className="text-[white]  px-4 py-1 bg-gradient-to-r from-[#67539B] to-[#413365] rounded-md"
                  onClick={() => handleClick('/register')}
                >
                  Watch Demo
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu Button (Conditionally Rendered) */}
        {isMobile ? (
          <div className="md:hidden mt-4">
            {isMenuOpen ? (
              <button className="text-[#161616] " onClick={closeMenu}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            ) : (
              <button className="text-[#161616] " onClick={toggleMenu}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            )}
          </div>
        ) : null}

        {/* Desktop Menu */}
        <div className={`md:flex  space-x-4 ${isMobile ? 'hidden' : 'block'}`}>
            
        <a href="/home" className="text-[#161616]  block p-2">
              Products
            </a>
            <a href="/aboutus" className="text-[#161616] block p-2">
              Partners
            </a>
            <a href="/ourservicespage" className="text-[#161616] block p-2">
              Resources
            </a>
          {/* Add the provided code snippet here for desktop screens */}
          {!isMobile && (
            <div className=" flex gap-5">
             <span className='flex'>
                    <img src={phone} alt="phone" className='w-5 h-5 mt-2'/>
                    <p className='text-xs mt-3 px-3'>+1-123-456-789</p>
                </span>
                <button
                // onClick={()=>navigate("/signin")}
                 className='flex mx-auto items-center text-[#161616]  px-2 rounded-lg'>
                    <img src={signin}  alt="signin"/>
                  Sign In
                </button>
                <button
                  className="text-[white]  px-5 py-1 bg-gradient-to-r from-[#67539B] to-[#413365] rounded-md"
                  onClick={() => handleClick('/register')}
                >
                  Watch Demo
                </button>
  
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
