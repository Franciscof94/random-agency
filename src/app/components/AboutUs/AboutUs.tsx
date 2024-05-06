'use client'
import { Title } from '../Title'
import { Cards } from './Cards'
import { Element } from 'react-scroll'
import ResizeContext, { useResizeContext } from '@/context/ResizeContext'


export const AboutUs = () => {
   const { isMobile } = useResizeContext();
    return (
        <Element name="sobre nosotros" className='pb-20 sm:pb-40'>
            <Title className='text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold pb-12 sm:pb-16'>COMO TRABAJAMOS</Title>
            <Cards isMobile={isMobile} />
        </Element>
    )
}
