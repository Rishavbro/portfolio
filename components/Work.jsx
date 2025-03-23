import { assets, workData } from '@/assets/assets'
import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react";


const Work = ({isDarkMode}) => {
  return (
    <motion.div id='work' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
         <motion.h4 className='text-center mb-2 text-lg font-Ovo '
         initial={{opacity:0,y:-20}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.5,delay:0.3}}>
         
           My portfolio
        </motion.h4>

        <motion.h2 className='text-center text-5xl font-Ovo'
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.3}}>
        
           My latest work
        </motion.h2>

        <motion.p className=' max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-justify'
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.5,delay:0.7}}
        >
       Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in full-stack development.
        </motion.p>

        <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.6,delay:0.9}}
        className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5 dark:text-black'>
            {workData.map((project,index)=>(
                <motion.div 
               whileHover={{scale:1.05}}
               transition={{delay:0.9,duration:0.6}}
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' key={index} style={{backgroundImage:`url(${project.bgImage})`}}>
              
               <div className= 'bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-between duration-500 group-hover:bottom-7 '>
               <div>
                       <h2 className='font-semibold '> {project.title}</h2>
                       <p className='text-sm text-gray-700'>{project.description}</p>
                    </div>
                    <div className='border rounded-full border-black w-12 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <a target='_blank' href={project.to}><Image src={assets.send_icon} alt='send icon' className='w-5' /></a>
                    </div>
               </div>
                
                </motion.div>

            ))}
        </motion.div>

        <motion.a target='_blank' href="https://github.com/Rishavbro" className='w-max p-3.5 flex items-center justify-center gap-2  text-gray-700 border-[0.5px] border-gray-700 rounded-full mx-auto my-20 hover:bg-[#fcf4ff] dark:text-white dark:border-white dark:hover:bg-[#2a004a]'
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.5,delay:1.1}}
        >
        check out my github profile for more projects <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} className='w-4' alt='arrow' /> <Image src={assets.github_icon} alt='gihub' className='w-8' />
        </motion.a>
        
    </motion.div>
  )
}

export default Work