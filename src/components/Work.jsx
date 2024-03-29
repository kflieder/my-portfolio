import React from 'react'
import workImg from '../assets/snapgrampic.png'
import velkan from '../assets/velkan.png'
import cgstudio from '../assets/cgstudio.png'


const Work = () => {


    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className='py-6'>// Check out some of my recent work</p>
                </div>
                {/* container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* grid item */}
                    <div
                        style={{ backgroundImage: `url(${workImg})`, backgroundSize: 'contain' }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                SnapGram (React JS)
                            </span>
                            <div className='pt-8 text-center'>


                                <a href='https://www.github.com/kflieder/snapgram'>
                                    <button className='text-center rounded-lg px-4 py-3 mx-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div
                        style={{ backgroundImage: `url(${velkan})`, backgroundSize: 'contain' }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Personal Business
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='http://velkanlopez.com/'>
                                    <button className='text-center rounded-lg px-4 py-3 mx-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/kflieder/personal-business'>
                                    <button className='text-center rounded-lg px-4 py-3 mx-2 bg-white text-gray-700 font-bold text-lg' >Code</button>
                                </a>
                            </div>

                        </div>

                    </div>
                    <div
                        style={{ backgroundImage: `url(${cgstudio})`, backgroundSize: 'contain' }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Hair Salon
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='http://cgstudio.com.mx/'>
                                    <button className='text-center rounded-lg px-4 py-3 mx-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/kflieder/CG-Studio'>
                                    <button className='text-center rounded-lg px-4 py-3 mx-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work