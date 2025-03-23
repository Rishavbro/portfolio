import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "motion/react";

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "de7fac33-361d-4f59-b5fe-3a546d1936ff");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <motion.div id='contact' className='w-full  px-[12%] py-10 scroll-mt-14 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
         <motion.h4 className='text-center mb-2 text-lg font-Ovo '
            initial={{opacity:0,y:-20}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,delay:0.3}}
         >
            Connect with me
        </motion.h4>

        <motion.h2 className='text-center text-5xl font-Ovo'
           initial={{opacity:0,y:-20}}
           whileInView={{opacity:1,y:0}}
           transition={{duration:0.5,delay:0.3}}
        >
           Get in touch
        </motion.h2>

        <motion.p className=' max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-justify'
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:0.5,delay:0.7}}
        >
        I'd love to hear from you! If you have any questions,commnets, or feedback please use the form below.
        </motion.p>

        <motion.form onSubmit={onSubmit} className='max-w-2xl mx-auto'
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:0.5,delay:0.9}}
        >
          <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8'>
            <motion.input 
               initial={{opacity:0,x:-50}}
               whileInView={{opacity:1,x:0}}
               transition={{duration:0.6,delay:1.1}}
            type="text" placeholder='Enter your name' required name='name'
              className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#11001f] dark:border-white'
            />
            <motion.input 
             initial={{opacity:0,x:-50}}
             whileInView={{opacity:1,x:0}}
             transition={{duration:0.6,delay:1.2}}
            type="email" placeholder='Enter your email' required name='email'
              className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#11001f] dark:border-white'
            />
          </div>
          <motion.textarea rows='6' placeholder='Enter your message' required name='message'
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-[#11001f] dark:border-white'
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.6,delay:1.3}}
          ></motion.textarea>

          <motion.button type='submit'  
            className='w-max py-3 px-8 mt-0 flex items-center justify-between gap-2 outline-none border rounded-full border-gray-500 bg-black/80 text-white  mx-auto  hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:hover:bg-[#11001f] dark:border-white/90'
            whileHover={{scale:1.05}}
            transition={{duration:0.3}}
          >Submit now <Image src={assets.right_arrow_white}  alt='' className='w-4'/></motion.button>
         
          <p className='mt-4'

          >{result}</p>
        </motion.form>

    </motion.div>
  )
}

export default Contact