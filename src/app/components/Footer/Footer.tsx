import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className='pt-40'>
      <hr className="w-full bg-black-80 h-[3px]" />
      <div className='flex justify-around py-12'>
        <div className='flex flex-col '>
          <h5 className="font-semibold">Contacto</h5>
          <p className='pt-2'>R!Agencia</p>
          <p className='py-2'>random.agencia@gmail.com</p>
          <p>+549 2245505890</p>
        </div>
        <div className='flex items-center gap-x-4'>
          <div>
            <IoLogoLinkedin size={45} />
          </div>
          <div>
            <FaSquareInstagram size={45} />
          </div>
        </div>
      </div>
    </footer>
  )
}
