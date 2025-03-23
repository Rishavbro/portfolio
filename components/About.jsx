import React from 'react';
import Image from 'next/image';
import { assets, infoList, toolsData } from '@/assets/assets';
import {motion} from 'motion/react'

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    
    >
        <motion.h4 className='text-center mb-2 text-lg font-Ovo '
            initial={{opacity:0,y:-20}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,delay:0.3}}
        >
            Introduction
        </motion.h4>

        <motion.h2 className='text-center text-5xl font-Ovo'
        initial={{opacity:1,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.5}}
        >
            About me
        </motion.h2>


        <motion.div className='flex w-full flex-col lg:flex-row items-center gap-20 my-18'
        initial={{opacity:0,}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
        >
            <motion.div className='w-64 sm:w-80 rounded-3xl max-w-none'
            initial={{opacity:0,scale:0.9}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.5,delay:0.6}}
            >
                <Image src={assets.my_profile_2_image} alt='user' className='w-full rounded-3xl' />
            </motion.div>

            <motion.div className='flex-1'
                        initial={{opacity:0,}}
                        whileInView={{opacity:1}}
                        transition={{duration:0.6,delay:0.8}}
            >
                <p className='mb-10 max-w-2xl font-Ovo'>
                    I am a full-stack web developer with MERN as my go to stack.I have built my own projects with the technologies i have learnt so far.I am always ready for the opportunities to collaabrate and contribute with you.
                </p>
                <motion.ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
                        initial={{opacity:0,}}
                        whileInView={{opacity:1}}
                        transition={{duration:0.8,delay:1}}
                >
                    {infoList.map((info,i)=>(
                        <motion.li 
                            whileInView={{scale:1.05}}
                        key={i} className='border-[0.5px]  border-gray-400 rounded-xl cursor-pointer p-3 hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] dark:border-white dark:hover:shadow-white dark:hover:bg-[#2a004a]/50
'>
                            <Image src={isDarkMode ? info.iconDark : info.icon} alt={info.title} className='w-7 mt-3 ' />
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{info.title}</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80'>{info.description}</p>
                        </motion.li>
                    ))}
                </motion.ul>
                <motion.h4 className='my-5 text-gray-700 font-Ovo dark:text-white'
                        initial={{opacity:0,y:20}}
                        whileInView={{opacity:1,y:0}}
                        transition={{duration:0.5,delay:1.3}}
                >Tools I use</motion.h4>

                <motion.ul className='flex items-center gap-3 sm:gap-5'
                        initial={{opacity:0,}}
                        whileInView={{opacity:1}}
                        transition={{duration:0.5,delay:1.5}}
                >
                    {toolsData.map((tool,i)=>(
                        <motion.li key={i} className='flex items-center justify-center w-12 p-4 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                            whileHover={{scale:1.05}}
                        >
                            <Image src={tool} alt='Tool' className='w-8 sm:w-7' />
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>

    </motion.div>
  )
}

export default About