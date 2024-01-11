import React from "react";
import { iconfb, iconinsta, iconpin, icontwit, birdeye } from "../../assets";
// import SvgIcons from "../../assets/SvgIcons";

const Footer = () => {
    return (

        <div className="font-poppins relative text-white bg-[#252831]">
            {/* <img src={footerbgimg} alt="footerbg" className="absolute  h-[40vh]" /> */}
            <div className="flex justify-between flex-wrap xl:max-w-[85%] container px-4 lg:px-9 mx-auto max-w-[80%] pb-16 pt-8">
                <ul className="max-w-[300px] mt-8 w-full">
                    <img
                        src={birdeye}
                        className="pb-7"
                        alt=""
                        width={230}
                        height={100}
                    />
                    <p className="text-[15px] leading-7">
                        Lorem ipsum dolor sit amet consectetur. Ante tempor dolor arcu pharetra pellentesque. Ac quis sem nibh tristique nibh malesuada. Hac pellentesque ac netus phasellus sit proin sit erat. Mollis hac arcu tortor sed leo fermentum ut. Eu sed viverra dolor id ornare.
                    </p>
                    <h1 className="my-4 font-bold text-lg">Follow Us Now</h1>
                    <div className="flex mt-3 justify-start  items-center">
                        <img className="w-[70px]" src={iconfb} alt="" />
                        <img className="w-[70px]" src={iconinsta} alt="" />
                        <img className="w-[70px]" src={icontwit} alt="" />
                        <img className="w-[70px]" src={iconpin} alt="" />
                    </div>
                </ul>
                <ul className="max-w-[250px] mt-10 w-full ">
                    <h1 className=" text-2xl text-primaryColor-0 font-bold pb-1 mb-6  ">
                        Quick Links
                    </h1>
                    <li className="pt-2 ">
                        <a
                            className="text-white flex items-center font-light hover:text-btnBlue-0 duration-100 text-lg cursor-pointer leading-6 my-2"
                            href="/"
                        >
                            <p className="font-medium text-base ">Home</p>
                        </a>
                    </li>
                    <li className="pt-2 ">
                        <a
                            className="text-white flex items-center font-light hover:text-btnBlue-0 duration-100 text-lg cursor-pointer leading-6"
                            href="/services"
                        >
                            <p className="font-medium text-base ">About Us</p>
                        </a>
                    </li>
                    <li className="pt-2 ">
                        <a
                            className="text-white flex items-center my-2 font-light hover:text-btnBlue-0 duration-100 text-lg cursor-pointer leading-6"
                            href="/whoWeServe"
                        >
                            <p className="font-medium text-base ">Services</p>
                        </a>
                    </li>
                    <li className="pt-2 ">
                        <a
                            className="text-white flex items-center font-light hover:text-btnBlue-0 duration-100 text-lg cursor-pointer leading-6"
                            href="/resourceOverview"
                        >
                            <p className="font-medium text-base ">Pricing</p>
                        </a>
                    </li>
                    <li className="pt-2 ">
                        <a
                            className="text-white flex items-center my-2 font-light hover:text-btnBlue-0 duration-100 text-lg cursor-pointer leading-6"
                            href="/contactUs"
                        >
                            <p className="font-medium text-base ">Contact us</p>
                        </a>
                    </li>
                </ul>

                <ul className="max-w-[300px] mt-8 w-full ">
                    <h1 className=" capitalize text-xl  font-bold pb-1 mb-6  ">
                        Subscribe to our newsletter to get latest updates
                    </h1>

                    <input type="text" className="w-full text-white rounded-lg  border bg-[#252831] px-4 py-2" placeholder="First Name" />
                    <input type="text" className="w-full text-white rounded-lg border bg-[#252831] px-4 py-2 my-4" placeholder="Last Name" />


                    <button type="submit" className="text-center w-full mt-5 py-4 bg-gradient-to-r from-[#67539B] to-[#413365]">Subscribe</button>

                </ul>


            </div>

        </div>
    );
};

export default Footer;
