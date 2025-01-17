import { assets, projectData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-slate-100/50 text-white p-2 rounded-full cursor-pointer z-10"
        >
            <Image
                src={assets.img_right_arrow}
                alt=''
                className="w-6 h-6"
            />
        </div>
    );
};

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-slate-100/50 text-white p-2 rounded-full cursor-pointer z-10"
        >
            <Image
                src={assets.img_left_arrow}
                alt=''
                className="w-6 h-6"
            />
        </div>
    );
};

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
                {projectData.map((project, index) => {
                    // Define slider settings for each project
                    const settings = {
                        dots: true,
                        infinite: project.bgImage.length > 1,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        arrows: true,
                        nextArrow: <CustomNextArrow />,
                        prevArrow: <CustomPrevArrow />,
                    };
                    return (
                        <div key={index} className="rounded-lg cursor-pointer group">
                            {/* 
                        <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden">
                            <img
                                src={project.bgImage}
                                alt={`Background for ${project.title}`}
                                className="object-cover w-full h-full"
                            />
                        </div> */}
                            {/* Image Carousel */}
                            <div className="rounded-lg overflow-hidden">
                                <Slider {...settings}>
                                    {project.bgImage.map((image, index) => (
                                        <div key={index} className="flex items-center justify-center w-full h-[200px] sm:h-[250px] md:h-[300px] bg-gray-1000">
                                            <Image
                                                src={image}
                                                width="1000"
                                                height="0"
                                                alt={`Slide ${index + 1} for ${project.title}`}
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        </div>
                                    ))}
                                </Slider>
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

                            {/* Description */}
                            {project.description && (
                                <div className="mt-4">
                                    <p className="text-gray-700 text-sm">{project.description}</p>
                                </div>
                            )}

                            {/* Features */}
                            {project.features?.length > 0 && (
                                <div className="mt-4">
                                    <ul className="list-disc list-inside text-gray-700 text-sm">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Projects