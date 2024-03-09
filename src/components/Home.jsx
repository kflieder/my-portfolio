import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Kacey Flieder</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a web developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'> 
        Through platforms such as YouTube, social media, and online learning platforms like Udemy, Codecademy, and Scrimba, I've dedicated countless hours to mastering coding skills. This journey into front-end web development has been a personal odyssey, reigniting my passion for technology. During this transformative period, I sought out local businesses without websites and offered to build them one, pro bono. This experience not only refined my abilities but also solidified my commitment to a career in web development. Envisioning a future as a digital nomad, I aspire to traverse the globe while crafting immersive digital experiences. Currently, I'm broadening my expertise by delving into back-end development, fueled by an insatiable thirst for knowledge and an unwavering dedication to excellence.
        </p>
        <div>
        <Link className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 w-40 cursor-pointer'  to="work"  
                    smooth={true} 
                    duration={500}>
                      View Work
              
        <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Home