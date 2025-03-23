import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = ({isDarkMode,setIsDarkMode}) => {

  const sideMenuRef = useRef();
  const [isScroll,setIsScroll] = useState(false)

  const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translatex(-16rem)'
  }

  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = 'translatex(16rem)'
  }

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false);
      }
    })
  },[])


  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
      <Image src={assets.header_bg_color}  alt='' className='w-full'/>
    </div>

    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll? `bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-[#11001F] dark:shadow-white/20` : ''} dark:text-white `}>
      <a href="#top">
        <Image src={assets.logo_1} alt='' className='w-28 cursor-pointer mr-14' />
      </a>

      <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : "bg-white shadow-sm bg-opacity-50"} dark:bg-[#11001F] `}>
        <li><a className='font-Ovo' href="#top">Home</a></li>
        <li><a className='font-Ovo' href="#about">About me</a></li>
        <li><a className='font-Ovo' href="#services">Services</a></li>
        <li><a className='font-Ovo' href="#work">My Work</a></li>
        <li><a className='font-Ovo' href="#contact">Contact me</a></li>
       
      </ul>
    

      <div className='flex items-center gap-4'>
        <button onClick={()=> setIsDarkMode((prev => !prev))}>
          <Image src={isDarkMode ?  assets.sun_icon :assets.moon_icon } alt='' className='w-6 cursor-pointer' />
        </button>
        <a className='hidden font-Ovo lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4   dark:border-white/50 dark:rounded-full ' href="#contact">
          Contact {isDarkMode ? <Image src={assets.arrow_icon_dark} alt='' className='w-3' /> : <Image src={assets.arrow_icon} alt='' className='w-3' />}
          </a>
        <button onClick={openMenu} className='block cursor-pointer   md:hidden'>
        {isDarkMode ?  <Image src={assets.menu_white} alt='' className='w-6' /> :<Image src={assets.menu_black} alt='' className='w-6' />}
        </button>
      </div>

      {/* ------------MOBILE MENU------- */}

      <ul onClick={closeMenu} ref={sideMenuRef} className='flex dark:text-black md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
     <div onClick={closeMenu} className='absolute top-6 right-5'>
      <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
     </div>
      <li><a className='font-Ovo' href="#top">Home</a></li>
        <li><a className='font-Ovo' href="#about">About me</a></li>
        <li><a className='font-Ovo' href="#services">Services</a></li>
        <li><a className='font-Ovo' href="#work">My Work</a></li>
        <li><a className='font-Ovo' href="#contact">Contact me</a></li>
      </ul>
    </nav>
    
    </>
  )
}

export default Navbar