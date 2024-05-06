'use client'
import React from 'react'
import { Link } from 'react-scroll';

export const MenuItems = () => {
    const sections = ['sobre nosotros', 'servicios', 'portfolio', 'contacto'];

    return (
        <ul className="flex flex-row  ml-4 sm:ml-4 md:ml-8 lg:ml-20 xl:ml-28">
            {sections.map((item, index) => (
                <li key={index} className="px-1 sm:px-1 md:px-2 lg:px-3 xl:px-6 text-xs sm:text-xs md:text-base lg:text-lg xl:text-lg font-medium cursor-pointer">
                    <Link to={item} smooth={true} duration={500} >
                        {item}
                    </Link>
                </li>
            ))
            }
        </ul >
    )
}
