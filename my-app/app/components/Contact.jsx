import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {



    return (
        <div
            id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
            <h4
                className='text-center mb-2 text-lg font-Ovo'>
                Connect with me</h4>
            <h2
                className='text-center text-5xl font-Ovo'>
                Get in touch</h2>
            <p
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Feel free to contact me!  You can email me at:</p>
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-6' />
                <a
                    href="mailto:diana.xu.cornell@gmail.com"
                    className="text-blue-500 hover:underline">
                    diana.xu.cornell@gmail.com
                </a>
            </div>
        </div>
    )
}

export default Contact
