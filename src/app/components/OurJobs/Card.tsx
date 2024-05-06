import Image from 'next/image'
import React from 'react'

interface Props {
    image: string;
    className: string;
    link: string
}

export const Card = ({ image, className, link }: Props) => {
    return (
        <a href={link} target="_blank" rel="noreferrer noopener">
            <div className={className}>
                <Image
                    src={image}
                    alt="Shape"
                />
            </div>
        </a>
    )
}
