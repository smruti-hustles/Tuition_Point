import React, { useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { Link } from 'react-scroll';
import logoo from "../assets/logoo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='fixed w-full z-20 top-0 bg-orange-100 bg-opacity-100'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2'>
          <img 
            src={logoo} 
            className='h-12 ml-4' 
            alt='Logo' // Increased logo size by setting height to 12
          />

          {/* Hamburger Menu Button */}
          <button 
            onClick={toggle}
            className='inline-flex items-center p-2 w-10 h-10 md:hidden text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-200'
          >
            <AiOutlineMenuUnfold className='text-lg text-orange-400' />
          </button>

          {/* Menu Links */}
          <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
            <ul className='flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:text-xl text-violet-700'>
              
              <Link spy={true} to='Home' activeClass='activeClass' smooth={true} duration={500}>
                <li>
                  <div className='block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-600 cursor-pointer'>Home</div>
                </li>
              </Link>

              <Link spy={true} to='About_org' activeClass='activeClass' smooth={true} duration={500}>
                <li>
                  <div className='block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-600 cursor-pointer'>About</div>
                </li>
              </Link>

              <Link spy={true} to='Explore' activeClass='activeClass' smooth={true} duration={500}>
                <li>
                  <div className='block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-600 cursor-pointer'>Explore</div>
                </li>
              </Link>

              <Link spy={true} to='FAQ' activeClass='activeClass' smooth={true} duration={500}>
                <li>
                  <div className='block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-600 cursor-pointer'>FAQ</div>
                </li>
              </Link>

              <Link spy={true} to='Contact' activeClass='activeClass' smooth={true} duration={500}>
                <li>
                  <div className='block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-600 cursor-pointer'>ContactUs</div>
                </li>
              </Link>

              
              <Link spy={true} to='Login' activeClass='activeClass' smooth={true} duration={500}>
                <li>
                  <button className='px-4 py-2 rounded-md text-white bg-orange-500 hover:bg-orange-600'>
                    Login
                  </button>
                </li>
              </Link>

              <Link spy={true} to='signup' activeClass='activeClass' smooth={true} duration={500}>
                <li>
                  <button className='px-4 py-2 rounded-md text-white bg-orange-500 hover:bg-orange-600'>
                    SignUp
                  </button>
                </li>
              </Link>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
