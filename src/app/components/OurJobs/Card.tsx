import Image from 'next/image'
import React from 'react'

interface Props {
    image: string;
    imageWidth: number;
    imageHeight: number;
    className: string;
    link: string
}

export const Card = ({ image, imageWidth, imageHeight, className, link }: Props) => {
    return (
        <a href={link} target="_blank" rel="noreferrer noopener">
            <div className={className}>
                <Image
                    src={image}
                    width={imageWidth}
                    height={imageHeight}
                    alt="Shape"
                />
            </div>
        </a>
    )
}
