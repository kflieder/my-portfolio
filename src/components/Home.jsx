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
        As a self-taught front-end web developer, I embarked on a journey of self-discovery that reignited my passion for technology. During this transformative period, I reached out to local businesses without websites and offered to build one for them, free of charge. This experience not only honed my skills but also reinforced my desire to pursue a career in web development. I envision a future as a digital nomad, traveling the world while crafting immersive digital experiences. Currently, I'm expanding my skill set by delving into back-end development, driven by a relentless pursuit of knowledge and a commitment to excellence.
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