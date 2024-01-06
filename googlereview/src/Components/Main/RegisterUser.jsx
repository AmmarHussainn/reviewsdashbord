import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    contactInformation: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/users/register', formData);

      // Handle the response, for example, log it
      console.log('API Response:', response.data);

      // TODO: You can redirect the user or perform other actions based on the API response
    } catch (error) {
      // Handle errors, for example, log the error
      console.error('API Error:', error.message);
      setError('Registration failed. Please check your data and try again.');
      // TODO: You can display an error message to the user or perform other actions
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <label className="block mb-2 text-lg text-gray-600" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />

        <label className="block mb-2 text-lg text-gray-600" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />

        <label className="block mb-2 text-lg text-gray-600" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />

        <label className="block mb-2 text-lg text-gray-600" htmlFor="number">
          Enter Phone Number
        </label>
        <input
          id="number"
          name="contactInformation"
          value={formData.contactInformation}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full px-4 py-2 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegisterUser;
