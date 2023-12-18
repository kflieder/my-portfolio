import React from 'react'
import mypic from '../assets/mypic.jpeg'
import {FaBars, FaTimes} from 'react-icons/fa'

export const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a129f] text-gray-300'>
        <div>
            <img src={mypic} alt="mypic" className='w-10 h-10 rounded-full'/>
        </div>
        {/* menu */}
        <div>
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>


        {/* Hamburger */}
        <div className='hidden'>
            <FaBars/>
        </div>
        {/* Mobile menu */}
        <ul className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>


        {/* Social Icons */}
        </div>
    )
}

export default Navbar