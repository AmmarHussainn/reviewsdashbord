import React from 'react'
import { solution } from '../../assets'

const Solution = () => {
    return (
        <div className='bg-[#F4F8FB]  '>
            <p className='text-4xl md:text-4xl py-20 font-bold font-poppins text-center mx-auto'>Solution For Every Industry</p>
            <div className="container px-4  lg:px-9 py-5 flex flex-wrap lg:flex-nowrap gap-2 justify-center items-center lg:justify-between  mx-auto max-w-[1300px] w-full">

                <div>
                    <button
                        className="text-[white]  px-4 py-1 bg-gradient-to-r from-[#67539B] to-[#413365] rounded-md"
                    >
                        Dental
                    </button>
                    <ul>
                        <li className='font-bold text-[#1D1D1D] my-2'>Healthcare</li>
                        <li className='font-bold text-[#1D1D1D] my-2'>Real Estate</li>
                        <li className='font-bold text-[#1D1D1D] my-2'> Home Services</li>
                        <li className='font-bold text-[#1D1D1D] my-2'>Retail</li>
                        <li className='font-bold text-[#1D1D1D] my-2'>Legal</li>
                        <li className='font-bold text-[#1D1D1D] my-2'>Finance</li>
                        <li className='font-bold text-[#1D1D1D] my-2'>Auto</li>
                        <li className='font-bold text-[#1D1D1D] my-2'>Personal Services</li>
                        <span className=' text-[#1D1D1D] my-2'>
                            Brandon Dowdy-Ernst<br/>
                            Smile Workshop
                        </span>
                    </ul>
                </div>
                <div>
                    <img src={solution} alt="" className='w-[800px] h-[650px]' />
                </div>
            </div>
        </div>
    )
}

export default Solution