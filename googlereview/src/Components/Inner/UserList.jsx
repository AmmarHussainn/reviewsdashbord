import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [subscriptionPrice, setSubscriptionPrice] = useState('');

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/auth/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
        console.log(data)
      } else {
        console.error('Failed to fetch users');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []); // Fetch users on component mount

  const handleApprove = async (email) => {
    try {
      const response = await fetch(`http://localhost:4000/api/auth/approve/${email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        fetchUsers(); // Refresh the user list
        console.log(`User ${email} approved successfully`);
      } else {
        console.error(`Failed to approve user ${email}`);
      }
    } catch (error) {
      console.error(Error `while approving user ${email}:`, error);
    }
  };

  const handleReject = async (email) => {
    try {
      const response = await fetch(`http://localhost:4000/api/auth/reject/${email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        fetchUsers(); // Refresh the user list
        console.log(`User ${email} rejected successfully`);
      } else {
        console.error(`Failed to reject user ${email}`);
      }
    } catch (error) {
      console.error(Error `while rejecting user ${email}:`, error);
    }
  };

  const handleAssignSubscription = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/auth/assignSubscription/${selectedUser}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subscriptionPrice }),
      });

      if (response.ok) {
        fetchUsers(); // Refresh the user list
        console.log(`Subscription assigned to user ${selectedUser} successfully`);
      } else {
        console.error(`Failed to assign subscription to user ${selectedUser}`);
      }
    } catch (error) {
      console.error(Error `while assigning subscription to user ${selectedUser}:`, error);
    }
  };

  return (
    <div className='flex w-full gap-2 container max-w-[1250px]'>
      <div className='w-[50%]'>
        <h2 className="text-xl font-bold mb-4 text-white">Users Request List</h2>
        <ul>
        {users.map((user) => (
            <li key={user.id} className="flex items-center justify-between bg-white p-4 mb-2 rounded shadow">
              <span>
                <p className='font-bold'>{user.username}</p>
                <p>{user.email}</p>
                <p>Status: {user.status}</p>
              </span>
              {user.status === 'Pending' && (
                <div className="flex space-x-2">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded"
                    onClick={() => handleApprove(user.email)}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleReject(user.email)}
                  >
                    Reject
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className='w-[50%]'>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Assign Subscription</h2>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Select User:</label>
            <select
              className="w-full p-2 border rounded"
              value={selectedUser}
              onChange={(event) => setSelectedUser(event.target.value)}
            >
              <option value="">Select User</option>
              {users.map((user) => (
                <option key={user.id} value={user.email}>{user.username} - {user.email}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Subscription Price:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={subscriptionPrice}
              onChange={(event) => setSubscriptionPrice(event.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAssignSubscription}
          >
            Assign Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
