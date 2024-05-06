'use client'
import React, { useContext } from 'react'
import { Element } from 'react-scroll'
import { Title } from '../Title'
import { Card } from './Card'
import LogoPinasco from '../../assets/PinascoLogo.svg'
import LogoLogifer from '../../assets/LogiferLogo.svg'
import LogoPickleball from '../../assets/PickleballLogo.svg'
import { ResizeContext } from '@/app/page'


export const OurJobs = () => {
    

    return (
        <Element name="portfolio" className='pb-20 sm:pb-40'>
            <Title className='text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold pb-12 sm:pb-16'>
                MARCAS QUE AYUDAMOS A CAMBIAR
            </Title>
            <div className='flex w-full items-center justify-center'>
                <Card link='https://maximopinasco.com.ar/' className='flex items-center justify-center w-full min-w-[122px] sm:min-w-64 max-w-[269px] h-20  sm:h-32 rounded-bl-[45px] rounded-tr-[45px] sm:rounded-bl-[90px] sm:rounded-tr-[90px] bg-white pinasco-logo-container' image={LogoPinasco} />
                <Card link='https://ferraromateriales.com.ar/' className='flex items-center justify-center w-full min-w-[122px] sm:min-w-64 max-w-[269px] h-20 sm:h-32 rounded-[38px] sm:rounded-[90px] bg-white logifer-logo-container' image={LogoLogifer} />
                {/*  <Card link='https://pickleball-front.vercel.app/' className='flex items-center justify-center w-full min-w-[122px] sm:min-w-64 max-w-[269px] h-20] sm:h-32 rounded-[90px] bg-white' image={LogoPickleball} imageHeight={27} imageWidth={186} /> */}
                <Card link='https://pickleball-front.vercel.app/' className='flex items-center justify-center w-full min-w-[122px] sm:min-w-64 max-w-[269px] h-20 sm:h-32 rounded-bl-[45px] rounded-tr-[45px] sm:rounded-bl-[90px] sm:rounded-tr-[90px] bg-white pickleball-logo-container' image={LogoPickleball} />
            </div>
        </Element>
    )
}
