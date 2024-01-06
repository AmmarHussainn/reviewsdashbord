// src/components/Dashboard.js
import React from 'react';
import UserList from './UserList';
import SubscriptionForm from './SubscriptionForm';
import AdminSidebar from './AdminSidebar';

const AdminDashboard = () => {
  return (
    <div className="flex">
      <AdminSidebar/>
    <div className="bg-[#3F6884] min-h-screen p-4 w-full" >
      <div className='my-5'>
      <h1 className="text-2xl font-bold mb-4 text-white">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <UserList />
        </div>
        <div>
          <SubscriptionForm />
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
