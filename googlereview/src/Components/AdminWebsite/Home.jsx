import Header from "./Navbar";
import Footer from "./Footer";
import LeftContentRightImage from "./LeftContentRightImage";
import SmallCard from "../AdminWebsite/SmallCards"
import React from 'react'
import Solution from "./Solution";

const Home = () => {
  return (
    <div className="">
    <Header/>
    <LeftContentRightImage/>
    <SmallCard/>
    <Solution/>
    <Footer/>
    </div>

  )
}

export default Home