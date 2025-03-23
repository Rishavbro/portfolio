import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Footer = ({isDarkMode}) => {
  return (
    <div  className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo_1} alt='' className='w-36 mx-auto mb-1 ' />
            <div className='w-max flex items-center justify-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
                kumarrishavsingh125@gmail.com
        </div>
        </div>
        <div className='text-justify sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>&copy; Rishav Kumar. All rights reserved</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/Rishavbro"><Image src={assets.github_icon} alt='gihub' className='w-8' /></a></li>
                <li><a target='_blank' href="https://x.com/kumarrishavsin5?t=62ttumzo_ihRm-neoac5JA&s=08"><Image src={assets.x_logo} alt='X' className='w-8' /></a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/rishav-kumar-3214062b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><Image src={assets.linkedin_logo} alt='gihub' className='w-8' /></a></li>
                
            </ul>
        </div>
 

    </div>
  )
}

export default Footer