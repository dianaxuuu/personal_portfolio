import { assets, projectData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return (
        <div
            id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>

            <h4
                className='text-center mb-2 text-lg font-Ovo'>
                What I did</h4>

            <h2
                className='text-center text-5xl font-Ovo'>
                My projects</h2>

            {/* <p
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my  portfolio! Here is a collection of projects showcasing my expertise.</p> */}

            <div className="grid grid-cols-auto my-10 gap-5">
                {projectData.map((project, index) => (
                    <div key={index} className="rounded-lg cursor-pointer group">
                        {/* Background Image */}
                        <div
                            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg"
                            style={{ backgroundImage: `url(${project.bgImage})` }}
                        ></div>

                        {/* Project Details */}
                        <div className="bg-white w-full rounded-md mt-3 py-3 px-5 flex items-center justify-between group-hover:-translate-y-2 transition-transform duration-300">
                            <div>
                                <h2 className="font-semibold">{project.title}</h2>
                                <p className="text-sm text-gray-700">{project.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <Image src={assets.send_icon} alt="send icon" className="w-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <a
                href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 '>
                Show more
                <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4' />
            </a>

        </div>
    )
}

export default Projects