'use client'
import React from 'react'
import { Element } from 'react-scroll'
import { Title } from '../Title'
import { Card } from './Card'
import LogoPinasco from '../../assets/PinascoLogo.svg'
import LogoLogifer from '../../assets/LogiferLogo.svg'
import LogoPickleball from '../../assets/PickleballLogo.svg'


export const OurJobs = () => {
    return (
        <Element name="portfolio" className='pb-40 '>
            <Title className='text-3xl font-bold pb-16'>
                MARCAS QUE AYUDAMOS A CAMBIAR
            </Title>
            <div className='flex w-full items-center justify-center'>
                <Card link='https://maximopinasco.com.ar/' className='flex items-center justify-center min-w-[269px] h-[130px] rounded-bl-[90px] rounded-tr-[90px] bg-white' image={LogoPinasco} imageHeight={70} imageWidth={160} />
                <Card link='https://ferraromateriales.com.ar/' className='flex items-center justify-center min-w-[269px] h-[130px] rounded-[90px] bg-white' image={LogoLogifer} imageHeight={86} imageWidth={86} />
                {/*  <Card link='https://pickleball-front.vercel.app/' className='flex items-center justify-center min-w-[269px] h-[130px] rounded-[90px] bg-white' image={LogoPickleball} imageHeight={27} imageWidth={186} /> */}
                <Card link='https://pickleball-front.vercel.app/' className='flex items-center justify-center min-w-[269px] h-[130px] rounded-bl-[90px] rounded-tr-[90px] bg-white' image={LogoPickleball} imageHeight={27} imageWidth={186} />
            </div>
        </Element>
    )
}
