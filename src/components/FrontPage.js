import React from 'react'
import Home from './Home'
import About from './About'
import Delivery from './Delivery'
import  img1  from "../assests/image.png"
import { IoIosHeartEmpty } from "react-icons/io";

export default function FrontPage() {
  return (
    <div>
        <div className='flex  items-center gap-2 '>
        <IoIosHeartEmpty />
        <p>wjhcjqll</p>
        </div>
        <img src={img1}  alt='img1' className='h-[300px] w-full'/>
        <Home />
        <About />
        <Delivery />
    </div>
  )
}
