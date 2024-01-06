// src/components/UserSubscriptionList.js
import React from 'react';
import {Users} from "react-feather"
import AdminSidebar from './AdminSidebar';

const UserSubscriptionList = () => {
  // Dummy user subscription data
  const userSubscriptions = [
    { userId: 1, userName: 'User 1', amount: 50 },
    { userId: 2, userName: 'User 2', amount: 30 },
    // Add more user subscription data as needed
  ];

  return (
    <div className='flex'>
      <AdminSidebar/>
    <div className='w-full bg-[#3F6884] font-dm-sans'>
      <div className='my-5 mx-3'>
      <Users className="ml-2 text-white" size={28} />
      <h2 className="text-xl font-bold mb-4 text-white">User Subscription List</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-lg text-white uppercase tracking-wider font-bold">
              User
            </th>
            <th scope="col" className="px-6 py-3 text-left text-lg  text-white uppercase tracking-wider font-bold">
              Amount Spent
            </th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200 ">
          {userSubscriptions.map((subscription) => (
            <tr key={subscription.userId}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-sm font-medium text-[#FFFAF1]">
                      {subscription.userName}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-bold text-[#FFFAF1]">${subscription.amount}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </div>
  );
};

export default UserSubscriptionList;
