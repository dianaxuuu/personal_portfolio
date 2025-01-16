import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-20'>
            {/* <div className='text-center'>
                <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />
            </div> */}

            <div className='text-right sm:flex items-center justify-end border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/dianaxuuu">GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/diana-xu-5a5a151a3">LinkedIn</a></li>
                    <li><a
                        href="mailto:diana.xu.cornell@gmail.com"
                        target='_blank'>
                        Email</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Footer