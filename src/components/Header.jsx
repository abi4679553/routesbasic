import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Header = () => {
   const navigate = useNavigate();
    return (
        <div className=' bg-pink-600 text-white flex sm:flex-row justify-between p-5'>
            <div >
                <p className='text-2xl'> 🎀Shankareshwari</p>
            </div>
            <div className='flex  gap-8 text-xl  '>
                <Link to = {"/Home"}>Home</Link>
                <p onClick={()=> navigate('/About')}>About</p>
                <p>Contact</p>
                <p>Delivery</p>
            </div>
        </div>
    )
}

export default Header