'use client'
import React from 'react'
import { Title } from '../Title'
import { Service } from './Service'
import ShapeOne from '../../assets/ShapeOne.svg'
import ShapeTwo from '../../assets/ShapeTwo.svg'
import ShapeThree from '../../assets/ShapeThree.svg'
import { Element } from 'react-scroll'

export const OurServices = () => {
    return (
        <Element name="servicios" className='pb-40'>
            <Title className='text-3xl font-bold pb-16'>LO QUE HACEMOS</Title>
            <hr className="w-full bg-black-80 h-[3px]" />
            <Service
                title="SITIO WEB"
                description="Nos aseguramos de que tu sitio web transmita exactamente lo que deseas comunicar. Nos encargamos de todo el proceso: desde el taller creativo, pasando por el diseño de experiencia de usuario y navegación, hasta el diseño, programación, creación de contenido, pruebas e implementación."
                image={ShapeOne}
                side='right'
            />
            <hr className="w-full bg-black-80 h-[3px]" />
            <Service
                title="NUEVA MARCA"
                description="Creamos marcas que atraen a las personas. Te apoyaremos en la elección del nombre y la identidad visual para tu producto o nueva marca. Además, encontraremos la manera de construir una sólida posición en el mercado."
                image={ShapeTwo}
                side='left'
            />
            <hr className="w-full bg-black-80 h-[3px]" />
            <Service
                title="CAMPAÑAS ONLINE"
                description="No buscamos gestionar un gran número de campañas. Nos centramos únicamente en aquellas que te proporcionarán beneficios tangibles."
                image={ShapeThree}
                side='right'
            />
            <hr className="w-full bg-black-80 h-[3px]" />
        </Element>
    )
}
