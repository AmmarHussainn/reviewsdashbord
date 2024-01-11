import React from "react";
import { arrow, homebanner, line } from "../../assets";

const LeftContentRightImage = () => {
    return (
        <>
            <div className="container px-4  lg:px-9 py-5  text-white  flex flex-wrap lg:flex-nowrap gap-7 justify-center items-center lg:justify-between  mx-auto max-w-[1300px] w-full">
                <div className="max-w-[400px] w-full flex flex-col gap-6 justify-start text-white ">

                    <p className=" text-5xl md:text-5xl font-bold font-poppins text-[#272727]">
                        Get Review Buy The Growing
                    </p>
                    <p className="font-poppins text-md font-medium text-[#292929]">
                        Maintain a winning reputation, engage digitally, and deliver an exceptional customer experience - all from one intuitive platform.
                    </p>
                    <div>
                    <input
                            type="email"
                            className=" rounded-md px-20 py-2 bg-[#EBEBEB] text-[#A6A6A6]"
                            placeholder="Enter your business email"
                        />
                    </div>
                    <div className="flex gap-4 md:flex-nowrap flex-wrap">
                        
                        <button
                            className="text-[white] px-10 py-1 bg-gradient-to-r from-[#67539B] to-[#413365] rounded-md"
                        >
                            Watch Demo
                        </button>
                        <button className="flex items-center justify-center rounded-md text-sm font-bold font-poppins w-[50%] border border-[#493970] py-3 px-4 text-[#493970] bg-opacity-10 transition duration-300">
                            <p className="pr-3">See Pricing</p>
                            <img src={arrow} alt="arrow" className="w-5 h-3 mt-1" />
                        </button>

                    </div>
                </div>

                <div className="max-w-[600px] w-full">
                    <img src={homebanner} alt="mazenavigator" />
                </div>
            </div>
        </>
    );
};

export default LeftContentRightImage;
