import React from 'react';
import Image from 'next/image';
import {assets, serviceData} from '../assets/assets'
import { motion } from "motion/react";

const Services = ({isDarkMode}) => {
  return (
    <motion.div id='services' className='w-full px-[12%] py-10 scroll-mt-20' 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
       <motion.h4 className='text-center mb-2 text-lg font-Ovo '
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.3}}>
            What I offer
        </motion.h4>

        <motion.h2 className='text-center text-5xl font-Ovo'
         initial={{opacity:0,y:-20}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.5,delay:0.5}}>
           My Services
        </motion.h2>

        <motion.p className=' max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-justify'
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:0.5,delay:0.7}}
        >
        As a passionate full-stack developer, I specialize in building dynamic and responsive web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). With a strong foundation in both front-end and back-end development, I enjoy creating seamless user experiences while ensuring robust and scalable server-side functionality.
        </motion.p>

        <motion.div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10 '
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:0.6,delay:0.9}}
        >

          {serviceData.map(({icon,title,description,link},i)=>(
            <motion.div
              whileHover={{scale:1.05}}
            key={i} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-1 duration-500 dark:hover:bg-[#11001F] dark:hover:shadow-white'>
                <Image src={icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                  {description}
                </p>
                <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                  Read more <Image src={assets.right_arrow} className='w-4' alt='' />
                </a>
            </motion.div>

          ))}

        </motion.div>
    </motion.div>
  )
}

export default Services