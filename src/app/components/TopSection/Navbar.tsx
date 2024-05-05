import React from 'react'
import Image from 'next/image'
import Logo from '../../assets/Logo.svg'
import { MenuItems } from './MenuItems'

export const Navbar = () => {
  return (
    <header className="flex items-center">
      <Image
        src={Logo}
        width={62}
        height={50}
        alt="Logo"
      />
      <MenuItems />
    </header>
  )
}
