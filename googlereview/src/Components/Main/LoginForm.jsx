// src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [loginError, setLoginError] = useState(null);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
    // Clear the login error when the user starts typing
    setLoginError(null);
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
  
        if (result?.user?.role) {
          if (result.user.role === 'admin') {
            navigate('/adminDashboard');
          } else if (result.user.role === 'user' && result.user.status === 'Approved') {
            navigate('/card');
          } else {
            console.error('Login failed: Invalid role or status');
            setLoginError('Invalid login'); // Set the login error message
          }
        } else {
          console.error('Login failed: Role information not found in response');
          setLoginError('Invalid login'); // Set the login error message
        }
      } else if (response.status === 404) {
        // Check if the response status is 404 (Not Found) for user not registered
        setLoginError('User not registered');
      } else {
        const errorData = await response.json();
        console.error('Login failed:', response.status, errorData.error);
        setLoginError('Invalid login'); // Set the login error message for other errors
      }
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError('Invalid login'); // Set the login error message for other errors
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

        {loginError && (
          <div className="text-red-500 mb-4">{loginError}</div>
        )}

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
