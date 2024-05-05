import React from 'react'
import Plus from '../../assets/Plus-icon.svg'
import Image from 'next/image'

export const Presentation = () => {
    return (
        <div>
            <div className='pb-14'> <h1 className='text-7xl font-semibold'>RANDOM</h1>
            <h1 className='text-7xl font-semibold pl-[270px]'>AGENCIA</h1></div>
            <div className='flex justify-between w-[650px]'>
                <Image
                    src={Plus}
                    width={54}
                    height={54}
                    alt="Plus-icon"
                    className='mt-[-100px]'
                />
                <p className='w-96'>
                    Nos especializamos en diseñar y desarrollar páginas web que potencian la comunicación,
                    conectan con el público objetivo y impulsan el crecimiento de tu negocio
                </p>
            </div>
     
        </div>
    )
}
