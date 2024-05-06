import Image from 'next/image'
import Logo from '../../assets/Logo.svg'
import { MenuItems } from './MenuItems'
import { FaBarsStaggered } from "react-icons/fa6";
import { useContext } from 'react';
import { SidebarContext } from '@/app/page';


interface Props {
  isMobile: boolean
}

export const Navbar = ({ isMobile }: Props) => {
  const { setSidebarIsOpen } = useContext(SidebarContext);

  return (
    <header className="flex items-center justify-between sm:justify-start">
      {isMobile && <div className='cursor-pointer' onClick={() => setSidebarIsOpen(true)}>
        <FaBarsStaggered size={25} />
      </div>}
      <div className='logo-image-container mr-6 sm:m-0'>
        <Image
          src={Logo}
          width={62}
          height={50}
          alt="Logo"
        />
      </div>
      {!isMobile && <MenuItems />}
    </header>
  )
}
