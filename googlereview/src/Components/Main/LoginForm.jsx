// src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate(); // To access the navigate function for navigation

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
  
    sessionStorage.setItem('email', loginData.email);
  
    try {
      // Make a POST request to the backend endpoint
      const response = await fetch('https://localhost:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      if (response.ok) {
        console.log(response);
        // Assuming the backend returns a JSON object with user type and subscription status
        const result = await response.json();
  
        sessionStorage.setItem('userId', result.userId);
        sessionStorage.setItem('role', result.role);

        // Check user type and navigate to the respective dashboard
        if (result.role === 'admin') {
          navigate('/superadmin');
        } else if (result.role === 'hospital') {
          navigate('/hospDashboard');
        } else if (result.role === 'subscriber') {
          navigate('/userDash');
        } else {
          navigate('/userDash');
        }
      } else {
        // If the response status is not OK, handle login error
        console.error('Login failed:', response.status);
        // You can show an error message, update state, etc.
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
        onClick={()=>navigate('/card')}
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
