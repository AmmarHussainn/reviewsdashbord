// Sidebar.js
import React from 'react';
import { Avatar, activityicon, libraryicon, logouticon, payouticon, schedulesicon, securityicon, settingsicon } from '../assets';

const Sidebar = () => {
  return (
    <div className="flex max-w-[200px] h-auto items-center gap-20 w-full flex-col  bg-[#2E5671] text-white p-4 ">
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

        <div className="flex gap-1 hover:border-white hover:border-2 hover:rounded-lg"><img src={activityicon} alt=""/>Activity</div>
        <div className="flex gap-1"><img src={libraryicon} alt="" />Library</div>
        <div className="flex gap-1"><img src={securityicon} alt="" />Security</div>
        <div className="flex gap-1"><img src={schedulesicon} alt="" />Schedules</div>
        <div className="flex gap-1"><img src={payouticon} alt="" />Payouts</div>
        <div className="flex gap-1"><img src={settingsicon} alt="" />Settings</div>
      </nav>
      <div>
      <div className="flex gap-1"><img src={logouticon} alt=""/><p>Log Out</p></div>
      </div>
    </div>
  );
};


export default Sidebar;