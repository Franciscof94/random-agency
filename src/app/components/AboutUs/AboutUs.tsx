'use client'
import React from 'react'
import { Title } from '../Title'
import { Cards } from './Cards'
import { Element } from 'react-scroll'

export const AboutUs = () => {
    return (
        <Element name="sobre nosotros" className='pb-40'>
            <Title className='text-3xl font-bold pb-16'>COMO TRABAJAMOS</Title>
            <Cards />
        </Element>
    )
}
