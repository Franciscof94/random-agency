
import React, { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-scroll';
import { IoClose } from "react-icons/io5";
import { useSidebarContext } from '@/context/SidebarContext';


export const Sidebar = () => {

    const sidebarRef = useRef<any>(null);
    const { sidebarIsOpen, setSidebarIsOpen } = useSidebarContext();

    
    useEffect(() => {
        const handleBodyScroll = () => {
            document.body.style.overflow = sidebarIsOpen ? 'hidden' : 'auto';
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebarIsOpen(false);
            }
        };

        handleBodyScroll();

        if (sidebarIsOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.body.style.overflow = 'auto';
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('click', handleClickOutside);
        };
    }, [sidebarIsOpen, setSidebarIsOpen]);


    const sections = ['sobre nosotros', 'servicios', 'portfolio', 'contacto'];
    return (
        <div ref={sidebarRef} id="sidebarContent" className={`fixed inset-y-0 left-0 w-64 bg-sky-blue text-white p-4 transition-transform duration-300 ${sidebarIsOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='flex justify-end' ><IoClose onClick={() => setSidebarIsOpen(false)} size={45} color="bg-black-80" /></div>
            <div className="mt-4">
                {sections.map((item, index) => (
                    <li key={index} className="list-none mb-6 text-lg font-semibold" >
                        <Link to={item} smooth={true} duration={500} onClick={() => setSidebarIsOpen(false)}>
                            {item}
                        </Link>
                    </li>
                ))}
            </div>
        </div>
    )
}
