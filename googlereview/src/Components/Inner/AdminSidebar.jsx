// src/components/AdminSidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Users, Settings, User } from 'react-feather';

const AdminSidebar = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#2E5671] text-white h-screen p-4 font-dm-sans w-[200px]">
            <div className='my-5'>
            <User className="mx-auto mb-4" size={32} />
                <h2 className="text-2xl font-bold mb-4 w-full">Admin Panel</h2>
                <ul>
                    <li className="flex items-center mb-2 cursor-pointer" onClick={() => navigate('/adminDashboard')}>
                        <Home className="mr-2" size={18} />
                        Dashboard
                    </li>
                    <li className="flex items-center mb-2 cursor-pointer" onClick={() => navigate('/userSubList')}>
                        <Users className="mr-2" size={18} />
                        Users
                    </li>
                    {/* Add more navigation links as needed */}
                </ul>
            </div>
        </div>
    );
};

export default AdminSidebar;
