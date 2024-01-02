import React from 'react' 
import Card from "../Components/Card"
import Sidebar from  "../Components/Sidebar" 

const Dashboard = () => {
  return (
    <div className='flex'> 
      <Sidebar/>
    <div className="bg-[#3F6884] h-full w-full">
        <Card/>
    </div>
    </div>
  )
}

export default Dashboard