import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "../../Components/Dashboard"
import InnerBar from '../Inner/InnerBar';


const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard/>} />
        <Route path="/innerbar" element={<InnerBar/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;