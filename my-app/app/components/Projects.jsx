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

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 my-10 gap-10">
                {projectData.map((project, index) => (
                    <div key={index} className="rounded-lg cursor-pointer group">
                        {/* Background Image */}
                        <div className="rounded-lg w-full sm:h-72 md:h-80 relative overflow-hidden">
                            <img
                                src={project.bgImage}
                                alt={`Background for ${project.title}`}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Project Batches */}
                        <div
                            className="bg-white w-full rounded-md mt-3 py-3 px-1 flex items-center justify-between transition-transform duration-300 group-hover:-translate-y-2"
                        >
                            <div>
                                <h2 className="font-semibold">{project.title}</h2>
                                <p className="text-sm text-gray-700">{project.subtitle}</p>

                            </div>
                            <div className="flex space-x-4">
                                {/* Demo Icon */}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
                                    >
                                        <Image
                                            src={assets.demo_icon}
                                            alt={`Live demo for ${project.title}`}
                                            className="w-6 h-6"
                                        />
                                    </a>
                                )}
                                {/* GitHub Icon */}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
                                    >
                                        <Image
                                            src={assets.github_icon}
                                            alt={`GitHub repository for ${project.title}`}
                                            className="w-6 h-6"
                                        />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            {project.skills?.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="inline-block bg-gray-200 text-gray-700 text-xs font-medium rounded-full px-2 py-1 mr-1 mt-1"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>


            {/* <a
                href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 '>
                Show more
                <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4' />
            </a> */}

        </div>
    )
}

export default Projects