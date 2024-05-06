import React from 'react'
import Plus from '../../assets/Plus-icon.svg'
import Image from 'next/image'

export const Presentation = () => {
    return (
        <div className='mb-12 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0'>
            <div className='md:pb-8 lg:pb-14 xl:pb-14'>
                <h1 className='font-semibold text-2xl sm:text-lg md:text-5xl lg:text-[3.5rem] xl:text-7xl'>RANDOM</h1>
                <h1 className='font-semibold text-2xl md:pl-44 pl-24 lg:pl-[200px] xl:pl-[270px] sm:text-lg md:text-5xl lg:text-[3.5rem] xl:text-7xl'>AGENCIA</h1>
            </div>


            <div className='flex justify-between pt-3 sm:p-0 w-[220px] md:w-full lg:w-full xl:w-full max-w-[650px]'>
                <div className="image-plus-container">
                    <Image
                        src={Plus}
                        
                        alt="Plus-icon"
                     
                    />
                </div>
                <p className='text-[10px] ml-6 sm:m-0 sm:text-[10px] md:text-base lg:text-base xl:text-base w-96'>
                    Nos especializamos en diseñar y desarrollar páginas web que potencian la comunicación,
                    conectan con el público objetivo y impulsan el crecimiento de tu negocio
                </p>
            </div>

        </div>
    )
}
