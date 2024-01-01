import React, {useState} from 'react'
import mypic from '../assets/mypic.jpeg'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonFill} from 'react-icons/bs'

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={mypic} alt="mypic" className='w-10 h-10 rounded-full'/>
        </div>
        {/* menu */}
        <div className='hidden md:flex'>
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>


        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4x1'>Home</li>
            <li className='py-6 text-4x1'>About</li>
            <li className='py-6 text-4x1'>Skills</li>
            <li className='py-6 text-4x1'>Work</li>
            <li className='py-6 text-4x1'>Contact</li>
        </ul>


        {/* Social Icons */}
        <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
                <a href=''>
                    LinkedIn <FaLinkedin />
                </a>
            </ul>
        </div>
        </div>
    )
}

export default Navbar