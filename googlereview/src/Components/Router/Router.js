import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from "../Main/Card"
// import Dashboard from "../../Components/Dashboard"; // Update this line
import PieChart from '../Inner/PieChart';
import LoginForm from '../Main/LoginForm';
import RegisterUser from '../Main/RegisterUser';
import AdminDashboard from '../Inner/AdminDashboard';
import UserSubscriptionList from '../Inner/UserSubscriptionList';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Card />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterUser />} />
                <Route path="/card" element={<Card/>}/>
                <Route path="/piechart" element={<PieChart />} />
                <Route path="/adminDashboard" element={<AdminDashboard />} />
                <Route path="/userSubList" element={<UserSubscriptionList />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
