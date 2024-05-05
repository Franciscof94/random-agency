import React from 'react'
import { Title } from '../Title'
import Image from 'next/image'

interface ServiceProps {
    title: string;
    description: string;
    image: string;
    side: "left" | "right"
}

export const Service = ({ title, description, image, side }: ServiceProps) => {


    return (
        <div className='flex py-9'>
            {side === "left" && <Image
                src={image}
                width={132}
                height={132}
                alt={title}
            />}
            <div className=''>
                <Title className='text-[22px] font-bold pl-16'>{title}</Title>
                <p className='pl-16 pr-2 py-4'>
                    {description}
                </p>
            </div>
            {side === "right" && <Image
                src={image}
                width={132}
                height={132}
                alt={title}
            />}
        </div>
    )
}