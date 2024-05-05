import Image from 'next/image'
import ArrowImage from '../../assets/Arrow.svg'
import React from 'react'

interface Props {
    className?: string
}

export const Arrow = ({ className }: Props) => {
    return (
        <div>
            <Image
                src={ArrowImage}
                width={50}
                height={13}
                alt="Arrow"
                className={className}
            />
        </div>
    )
}
