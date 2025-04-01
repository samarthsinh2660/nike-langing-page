import React, { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constant';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const handler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/"> 
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}> 
              <a href={item.herf} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
             {/* // condition for mobile */}
      {isOpen && (
        <ul className='flex flex-col justify-center items-center gap-4 bg-white p-4'>
          {navLinks.map((item) => (
            <li key={item.label}> 
              <a href={item.herf} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="hamburger" onClick={handler} width={25} height={25} />
        </div>
        
      </nav>

    </header>
  );
};

export default Nav;
