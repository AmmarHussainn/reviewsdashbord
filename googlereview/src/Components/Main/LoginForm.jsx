// src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const result = await response.json();
        sessionStorage.setItem('userId', result.user.userId);
        sessionStorage.setItem('role', result.user.role);

        // Check user type and navigate to the respective dashboard
        if (result.user.role === 'admin') {
          navigate('/adminDashboard');
        } else if (result.user.role === 'user') {
          navigate('/card');
        } else {
          navigate('/card');
        }
      } else {
        const errorData = await response.json();
        console.error('Login failed:', response.status, errorData.error);
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Handle other errors, show an error message, etc.
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <label className="block mb-2 text-lg text-gray-600" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={loginData.email}
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
          value={loginData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full px-4 py-2 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
