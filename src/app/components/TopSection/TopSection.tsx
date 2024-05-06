'use client'
import React, { useContext } from 'react'
import Design from '../../assets/Design.svg'
import { Navbar } from './Navbar'
import Image from 'next/image'
import { Presentation } from './Presentation'
import { ButtonPresentation } from './ButtonPresentation'
import ResizeContext from '@/context/ResizeContext'

export const TopSection = () => {

    let { isMobile } = useContext(ResizeContext);

    return (
        <div className='pb-20 sm:pb-36 md:pb-36 lg:pb-36 xl:pb-40'>
            <div className='flex justify-between'>
                <div className="flex flex-col mt-4 sm:mt-8 md:mt-8 lg:mt-8 xl:mt-8 justify-between">
                    <Navbar isMobile={isMobile} />
                    <Presentation />
                    {!isMobile && <ButtonPresentation />}
                </div>

                <div className="image-container">
                    <Image
                        src={Design}
                        alt="Design"
                    />
                </div>

            </div>
            {isMobile && <div className="pt-4"><ButtonPresentation /></div>}
        </div>
    )
}
