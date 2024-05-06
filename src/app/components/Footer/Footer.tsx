import React, { useContext } from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import ResizeContext from '@/context/ResizeContext';


export const Footer = () => {
  let { isMobile } = useContext(ResizeContext);
  return (
    <footer className='pt-20 sm:pt-40'>
      <hr className="w-full bg-black-80 h-[3px]" />
      <div className='flex justify-around py-12'>
        <div className='flex flex-col '>
          <h5 className="font-semibold">Contacto</h5>
          <p className='text-sm sm:text-base pt-2'>R!Agencia</p>
          <p className='text-sm sm:text-base py-2'>random.agencia@gmail.com</p>
          <p className='text-sm sm:text-base'>+549 2245505890</p>
        </div>
        <div className='flex items-center gap-x-4'>
          <div>
            <IoLogoLinkedin size={isMobile ? 30 : 45} color='bg-black-80' />
          </div>
          <div>
            <FaSquareInstagram size={isMobile ? 30 : 45} color='bg-black-80' />
          </div>
        </div>
      </div>
    </footer>
  )
}
