'use client'
import React from 'react'
import { Link } from 'react-scroll';

export const MenuItems = () => {
    const sections = ['sobre nosotros', 'servicios', 'portfolio', 'contacto'];

    return (
        <ul className="flex flex-row">
            {sections.map((item, index) => (
                <li key={index} className="px-6 text-lg font-medium cursor-pointer">
                    <Link to={item} smooth={true} duration={500} >
                        {item}
                    </Link>
                </li>
            ))
            }
        </ul >
    )
}
