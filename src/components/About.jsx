import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Kacey! Nice to meet you. Please take a look around.</p>
                </div>
                <div>
                <p> 
                I'm a self-taught front-end web developer fueled by a passion for technology and a desire to create impactful digital experiences. My journey into web development began during a period of self-discovery, where I found myself drawn back to the world of tech. Eager to apply my skills and contribute to my community, I reached out to local businesses without websites and offered to build one for them pro bono. This experience not only allowed me to refine my craft but also reaffirmed my aspiration to pursue a career in web development. With an eye on the horizon, I dream of embracing the digital nomad lifestyle, where I can blend my love for coding with my thirst for adventure. Currently, I'm broadening my expertise by diving into the realm of back-end development, driven by curiosity and a relentless pursuit of mastery. Let's connect and embark on this exciting journey together!
                </p>
                </div>
                </div>
            

        </div>
    </div>
  )
}

export default About