import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "motion/react";

const Header = ({isDarkMode}) => {
  return (
    <div  className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div 
            initial={{scale:0}}
            whileInView={{scale:1}}
            transition={{duration:0.8,type:'spring',stiffness:100}}
        >
            <Image src={assets.my_profile_image} alt='' className='rounded-full w-40 h-40 object-cover object-top'/>
           
        </motion.div>
        <motion.h3
                 initial={{y:-20,opacity:0}}
                 whileInView={{y:0,opacity:1}}
                 transition={{duration:0.6,delay:0.3}}
        
        className='flex gap-2 items-end text-xl md:text-2xl mb-3 font-Ovo'>
            Hi! I'm Rishav Kumar <Image src={assets.hand_icon} alt='' className='w-6'/>
         </motion.h3>
        
        <motion.h1
          initial={{y:-30,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.8,delay:0.5}}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Full-stack web developer 
        </motion.h1>

        <motion.p
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.6,delay:0.7}}
          className='max-w-2xl mx-auto font-Ovo'
        >
            I am a Full-Stack web developer from Sitamarhi, India 
        </motion.p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a
              initial={{y:30,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:0.6,delay:1}}
            
            href="#contact" className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2'>
                Contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/>
                </motion.a>

            <motion.a 
                  initial={{y:30,opacity:0}}
                  whileInView={{y:0,opacity:1}}
                  transition={{duration:0.6,delay:1.2}}
            href="/Rishav-Resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black'>
            My resume <Image src={assets.download_icon} alt='' className='w-4'/>
            </motion.a>

        </div>
    </div>
  )
}

export default Header