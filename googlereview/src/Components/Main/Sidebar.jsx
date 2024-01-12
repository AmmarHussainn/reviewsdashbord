// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import { Avatar, activityicon, dashButton, libraryicon, logouticon, payouticon, schedulesicon, securityicon, settingsicon } from '../../assets';

const Sidebar = () => {
  return (
    <div className="flex max-w-[200px] h-auto items-center  gap-20 w-full flex-col  bg-[#2E5671] text-white p-4 ">
      {/* User Info */}
      <div>

      <div className="flex justify-center  mx-auto  my-10 mb-4">
        <img
          src={Avatar}
          alt="User Avatar"
          className="rounded-full w-20 h-20 "
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
      <nav className="flex  flex-col gap-2 font-poppins">
      <button className="font-poppins flex gap-3 text-[#2E5671] bg-gradient-to-r from-[#FEC324] to-[#FFD563]  font-bold py-2  px-5 items-center justify-start rounded mb-4">
       <img src={dashButton} alt="" /><a>Dashboard</a>
      </button>

        <div className="flex gap-1 py-1 px-2 hover:border-white hover:border-2 hover:rounded-lg"><img src={activityicon} alt=""/>Activity</div>
        <div className="flex gap-1 py-1 px-2 hover:border-2 hover:rounded-lg"><img src={libraryicon} alt="" />Library</div>
        <div className="flex gap-1 py-1 px-2 hover:border-2 hover:rounded-lg"><img src={securityicon} alt="" />Security</div>
        <div className="flex gap-1 py-1 px-2 hover:border-2 hover:rounded-lg"><img src={schedulesicon} alt="" />Schedules</div>
        <div className="flex gap-1 py-1 px-2 hover:border-2 hover:rounded-lg"><img src={payouticon} alt="" />Payouts</div>
        <div className="flex gap-1 py-1 px-2 hover:border-2 hover:rounded-lg"><img src={settingsicon} alt="" />Settings</div>
        <div className="flex gap-1 py-1 px-2 hover:border-2 hover:rounded-lg"><Link to="/reviews">See Reviews</Link></div>
      </nav>
      <div>
      <div className="flex gap-1 py-1 px-2 hover:border-2 mr-10 hover:rounded-lg"><img src={logouticon} alt=""/><p>Log Out</p></div>
      </div>
    </div>
  );
};


export default Sidebar;