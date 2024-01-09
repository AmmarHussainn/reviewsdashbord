// src/components/Dashboard.js
import React from 'react';
import UserList from './UserList';
import AdminSidebar from './AdminSidebar';

const AdminDashboard = () => {
  return (
    <div className="flex">
      <AdminSidebar/>
    <div className="bg-[#3F6884] min-h-screen p-4 w-full" >
      <div className='my-5'>
      <h1 className="text-2xl font-bold mb-4 text-white">Admin Dashboard</h1>
      <div >
        <div>
          <UserList />
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
