// src/components/SubscriptionForm.js
import React, { useState } from 'react';

const SubscriptionForm = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [subscriptionPrice, setSubscriptionPrice] = useState('');

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSubscriptionPrice(event.target.value);
  };

  const handleAssignSubscription = () => {
    // Implement subscription assignment logic here
    console.log(`Assign ${subscriptionPrice} subscription to user ${selectedUser}`);
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Assign Subscription</h2>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Select User:</label>
        <select
          className="w-full p-2 border rounded"
          value={selectedUser}
          onChange={handleUserChange}
        >
          {/* Generate options dynamically based on user data */}
          <option value="">Select User</option>
          <option value="1">User 1</option>
          <option value="2">User 2</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Subscription Price:</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={subscriptionPrice}
          onChange={handlePriceChange}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleAssignSubscription}
      >
        Assign Subscription
      </button>
    </div>
  );
};

export default SubscriptionForm;
