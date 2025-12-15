import React from 'react'
import Home from './Home'
import About from './About'
import Delivery from './Delivery'
import  img1  from "../assests/image.png"
import { IoIosHeartEmpty } from "react-icons/io";

export default function FrontPage() {
  return (
    <div>
        <div className='flex  items-center gap-2  text-2xl '>
        <IoIosHeartEmpty />
        <p>Shop </p>
        </div>
        <p className='text-3xl text-blue-700  text-center m-10'>Welcome My WebPage !!</p>
        <img src={img1}  alt='img1' className='h-[300px] w-80  ml-[40%] ' />
        <Home />
        <About />
        <Delivery />
    </div>
  )
}
