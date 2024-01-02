// Sidebar.js
import React from 'react';
import { Avatar } from '../assets';

const Sidebar = () => {
  return (
    <div className="flex max-w-[200px] h-full items-center gap-20 w-full flex-col  bg-[#2E5671] text-white p-4 ">
      {/* User Info */}
      <div>

      <div className="flex items-center my-10 mb-4">
        <img
          src={Avatar}
          alt="User Avatar"
          className="rounded-full w-12 h-12 mr-2"
        />
      </div>
      <div className='font-dm-sans'>
          <p className="text-lg font-semibold ">Charles Robbie</p>
          <p className="text-sm">New York, USA</p>
          <div className="flex items-center mt-1">
            <span className="mr-2">
              <i className="fas fa-map-marker-alt"></i>
            </span>
          </div>
        </div>
      </div>

      {/* Dashboard Button */}
     
      {/* Navigation Links */}
      <nav className="flex flex-col gap-2 font-poppins">
      <button className="font-poppins bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-2 px-4 rounded mb-4">
        Dashboard
      </button>

        <NavLink to="/activity">Activity</NavLink>
        <NavLink to="/library">Library</NavLink>
        <NavLink to="/security">Security</NavLink>
        <NavLink to="/schedules">Schedules</NavLink>
        <NavLink to="/payouts">Payouts</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
      <div>
        <p>Log Out</p>
      </div>
    </div>
  );
};

const NavLink = ({ to, children }) => (
  <a
    href={to}
    className="text-sm py-1 px-4 transition-colors duration-200 hover:bg-gray-700"
  >
    {children}
  </a>
);

export default Sidebar;