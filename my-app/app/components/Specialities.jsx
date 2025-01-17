import { assets, specialtyData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Specialities = () => {
    return (
        <div
            id="specialities" className='w-full px-[12%] py-10 scroll-mt-20'>

            <h4
                className='text-center mb-2 text-lg font-Ovo'>
                What I'm interested in</h4>

            <h2
                className='text-center text-5xl font-Ovo'>
                My Specialities</h2>

            {/* <p
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p> */}

            <div
                className='grid grid-cols-auto gap-6 my-10'>
                {specialtyData.map(({ icon, title, description }, index) => (
                    <div
                        key={index}
                        className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                        <Image src={icon} alt='' className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>
                            {description}
                        </p>
                        {/* <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                            Read more <Image alt='' src={assets.right_arrow} className='w-4' />
                        </a> */}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Specialities