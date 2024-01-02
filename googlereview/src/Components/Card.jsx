// App.js
import React from "react";
import { Business, Chart, Frame, Graph, Group, Icon } from "../assets";

const App = () => {
  return (
    <div className="h-auto">
        <div className="my-2 mx-2 "><h3 className='text-2xl text-white my-3'>Charles Robie</h3>
        <h1 className='text-5xl text-white my-3'>Welcome Reviews Dashboard</h1></div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-content-between gap-4 px-2 place-items-center">
        <div className="p-4 m-4 rounded-lg w-full max-w-[295px] h-[97px] shadow-md bg-[#FFCF4E] flex">
          <img src={Group} alt="" />
          <div className="mx-4">
            <p>Spent this month</p>
            <p className="text-2xl font-bold rounded-lg w-full">$682.5</p>
          </div>
        </div>

        <div className="p-4 m-4 w-full max-w-[295px] h-[97px] rounded-lg shadow-md bg-[#FFCF4E] flex">
          <img src={Group} alt="" />
          <div className="mx-4">
            <h1 className="text-xl">New Client</h1>
            <p>321</p>
          </div>
          <img src={Graph} alt="graph" />
        </div>

        <div className="p-4 m-4 rounded-lg w-full max-w-[295px] h-[97px] shadow-md bg-[#FFCF4E] flex">
          <img src={Icon} alt="" />
          <div className="mx-4">
            <h1 className="text-xl">Earnings</h1>
            <p className="text-2xl">$350.40</p>
          </div>
        </div>

        <div className="p-4 m-4 w-full max-w-[295px] border bg-white h-[97px] rounded-lg shadow-md  text-[#FFCF4E] flex">
          <div className="mx-4">
            <h1 className="text-xl">Acrivity</h1>
            <p className="text-2xl">$540.50</p>
          </div>
          <img src={Chart} alt="" className="w-[50%]"/>
        </div>
      </div>
      <div className="flex items-center ">
      <div className="p-4 m-4 rounded-lg shadow-md bg-[#FFFFFF] flex gap-6 w-full max-w-[716px]">
        <div className="w-[50%]">
        <h1 className="text-2xl font-bold text-[#3F6884] font-poppins">
          Business Review
        </h1>
        <p className="text-xl font-bold text-[#3F6884] font-poppins">
          Resial Review
        </p>
        <p className="text-sm my-4">
          It is a long established fact that area will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has agree will be distracted by the
          readable content of a page when do
        </p>
        </div>
        <div className="w-[50%]" >
            <img src={Business} alt="business" />
        </div>
      </div>
      <div className="rounded-lg shadow-md mx-2  flex items-center  bg-[#FFFFFF]">
        <img src={Frame} alt="" className=" my-3  "/>
      </div>
      </div>

      <div className="flex items-center ">
      <div className="p-4 m-4 rounded-lg shadow-md bg-[#FFFFFF] flex gap-6 w-full max-w-[716px]">
        <div className="w-[50%]">
        <h1 className="text-2xl font-bold text-[#3F6884] font-poppins">
          Business Review
        </h1>
        <p className="text-xl font-bold text-[#3F6884] font-poppins">
          Resial Review
        </p>
        <p className="text-sm my-4">
          It is a long established fact that area will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has agree will be distracted by the
          readable content of a page when do
        </p>
        </div>
        <div className="w-[50%]" >
            <img src={Business} alt="business" />
        </div>
      </div>
      <div className="rounded-lg shadow-md mx-2  flex items-center  bg-[#FFFFFF]">
        <img src={Frame} alt="" className=" my-3  "/>
      </div>
      </div>
    </div>
  );
};

export default App;