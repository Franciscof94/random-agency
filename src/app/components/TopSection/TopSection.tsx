import React from 'react'
import Design from '../../assets/Design.svg'
import { Navbar } from './Navbar'
import Image from 'next/image'
import { Presentation } from './Presentation'
import { ButtonPresentation } from './ButtonPresentation'

export const TopSection = () => {
    return (
        <div className='flex justify-between pb-40'>
            <div className="flex flex-col mt-8 justify-between">
                <Navbar />
                <Presentation />
                <ButtonPresentation />
            </div>
            <div>
                <Image
                    src={Design}
                    width={245}
                    height={717}
                    alt="Design"
                />
            </div>
        </div>
    )
}
