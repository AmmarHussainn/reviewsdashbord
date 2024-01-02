import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InnerBar from '../Inner/InnerBar';


const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/innerbar" element={<InnerBar/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;