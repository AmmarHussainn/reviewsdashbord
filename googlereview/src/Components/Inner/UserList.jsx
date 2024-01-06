// src/components/UserList.js
import React, { useState } from 'react';

const UserList = () => {
  // Dummy user data
  const users = [
    { id: 1, name: 'User 1', status: 'Pending' },
    { id: 2, name: 'User 2', status: 'Approved' },
    // Add more user data as needed
  ];

  const handleApprove = (userId) => {
    // Implement approval logic here
    console.log(`Approve user ${userId}`);
  };

  const handleReject = (userId) => {
    // Implement rejection logic here
    console.log(`Reject user ${userId}`);
  };

  return (
    <div >
      <h2 className="text-xl font-bold mb-4 text-white">Users Request List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="flex items-center justify-between bg-white p-4 mb-2 rounded shadow">
            <span>{user.name} - {user.status}</span>
            {user.status === 'Pending' && (
              <div className="flex space-x-2">
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded"
                  onClick={() => handleApprove(user.id)}
                >
                  Approve
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleReject(user.id)}
                >
                  Reject
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
