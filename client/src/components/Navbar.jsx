import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 flex border-b-2 border-gray-400 bg-[#080b40]">
        <div className="flex w-[45%] h-full justify-center items-center text-gray-200 px-6">
          <div className="text-3xl font-bold">AKASH</div>
        </div>
        <div className="flex-grow h-full w-[55%] flex justify-center items-center text-gray-400 gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-center w-[15%] justify-center items-center cursor-pointer transition-colors duration-300 ${
                isActive ? 'font-bold text-white' : 'text-gray-400'
              }`
            }
          >
            PROFILE
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              `text-center w-[15%] py-2 items-center cursor-pointer transition-colors duration-300 ${
                isActive ? 'font-bold text-white' : 'text-gray-400'
              }`
            }
          >
            PROJECT
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-center w-[15%] py-2 items-center cursor-pointer transition-colors duration-300 ${
                isActive ? 'font-bold text-white' : 'text-gray-400'
              }`
            }
          >
            CONTACT
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `text-center w-[10%] justify-center items-center cursor-pointer transition-colors duration-300 ${
                isActive ? 'font-bold text-white' : 'text-gray-400'
              }`
            }
          >
            LOGIN
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
