import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";


function Navbar() {
   
  const location=useLocation();

  console.log(location.state);
  const [toggle, setToggle]=useState(false);
  return (
    <div className='bg-blue-500 p-4'>
    <div className='max-w-[1240px] py-[15px] items-center  flex justify-between  mx-auto'>
      <div className='text-3xl'>
        Welcome
      </div>
      {
        toggle ?
          <AiOutlineClose onClick={()=> setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
          :
          <AiOutlineMenu onClick={()=> setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
      }
      
      <ul className=' hidden md:flex  text-white gap-10 '>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>
      {/* responsive */}
      <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black  top-[92px] 
       ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
        <li className='p-5'>Home</li>
        <li className='p-5'>About Us</li>
        <li className='p-5'>Services</li>
        <li className='p-5'>Contact Us</li>
      </ul>
      <p>UserName : {location.state.Username}</p>
    </div>
    </div>
  )
}

export default Navbar