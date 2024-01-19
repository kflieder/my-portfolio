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
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href=''>
                    LinkedIn <FaLinkedin size={30} />
                </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href=''>
                    GitHub <FaGithub size={30} />
                </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc3b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href=''>
                    Email <HiOutlineMail size={30} />
                </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href=''>
                    Resume <BsFillPersonFill size={30} />
                </a>
                </li>
                
            </ul>
        </div>
        </div>
    )
}

export default Navbar