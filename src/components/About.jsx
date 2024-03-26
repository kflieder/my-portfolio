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
            <p className='max-h-[250px] overflow-y-auto'>
              Technology has always fascinated me as a powerful tool capable of bringing people together. Despite my early interest in coding, I initially pursued a career in healthcare. However, the events of the past few years, especially during the COVID-19 pandemic, prompted me to reevaluate my path. After working overtime during the crisis I took the time to reflect, and I realized I needed a change. That's when I made the bold decision to move to Mexico, taking a year to reassess my life choices and discover what truly ignites my passion.

              At the outset of this transformative journey, I recognized it as a golden opportunity to delve into coding, something I've always yearned to pursue. What excites me most about this path is the perpetual learning it offers. In previous roles, I often found myself reaching a plateau of knowledge within six months to a year, leading to boredom and complacency. However, entering the tech industry promises a continuous stream of challenges and growth opportunities, ensuring I'll never stagnate or lose interest. This prospect genuinely thrills me.

              Currently, I'm immersing myself in backend development and mastering the art of connecting with APIs. However, my hunger for knowledge knows no bounds, and I aspire to broaden my skill set further. Python, C, C++, and countless other languages beckon as future conquests. The prospect of expanding my expertise in these areas fills me with anticipation and eagerness.

              I see technology not just as a career path but as a journey of perpetual discovery and evolution. It's a realm where curiosity is rewarded, and innovation knows no limits. I'm excited to embark on this adventure and eager to see where it takes me.
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default About