import React from 'react'
import { SectionNumbers } from '../SectionNumber'
import { Arrow } from './Arrow'

interface Props {
    isMobile: boolean
}

export const Cards = ({ isMobile }: Props) => {
    return (
        <div>
            <div className='flex'>
                <div className='w-full max-w-[500px] 2xl:max-w-[670px] h-72 sm:h-56 md:h-56 lg:h-64 xl:h-64 border-solid border-[1px] border-black-80 rounded-[70px] sm:rounded-[90px] bg-white'>
                    <SectionNumbers className='pl-8 pt-4 sm:pl-14 sm:pt-4 md:pl-14 md:pt-4 lg:pl-20 lg:pt-6 xl:pl-20 xl:pt-6 text-xl sm:text-3xl lg:text-4xl'>01</SectionNumbers>
                    <p className=' px-6 text-center sm:text-start sm:p-0 md:px-6 lg:px-20 xl:px-20 sm:py-3 md:py-4 lg:py-5 xl:py-7 text-[13px] sm:text-sm md:text-sm lg:text-base'>Dialogamos y planteamos un reto para tu marca.</p>
                    {!isMobile && <Arrow className='float-end mx-16 py-6' />}
                </div>
                <div className='w-full h-72 sm:h-56 md:h-56 lg:h-64 xl:h-64 border-solid border-[1px] border-black-80 bg-white rounded-tl-[70px] rounded-br-[70px] sm:rounded-tl-[90px] sm:rounded-br-[90px]'>
                    <SectionNumbers className=' pl-8 pt-4 sm:pl-14 sm:pt-4 md:pl-14 md:pt-4 lg:pl-20 lg:pt-6 xl:pl-20 xl:pt-6 text-xl sm:text-3xl lg:text-4xl'>02</SectionNumbers>
                    <p className='px-6 text-center sm:text-start sm:p-0 md:px-6 lg:pr-8 lg:pl-20 xl:pl-20 xl:pr-8 sm:py-3 md:py-4 lg:py-5 xl:py-7 text-[13px] sm:text-sm md:text-sm lg:text-base'>Realizamos investigaciones, entrevistamos a representantes de grupos objetivo y evaluamos la competencia. Analizamos los resultados y extraemos conclusiones.</p>
                    {!isMobile && <Arrow className='float-end mx-16 py-0.5' />}
                </div>
            </div>
            <div className='flex'>
                <div className='w-full max-w-[622px] h-72 sm:h-56 md:h-56 lg:h-64 xl:h-64 border-solid border-[1px] border-black-80 bg-white rounded-br-[70px] sm:rounded-br-[90px]'>
                    <SectionNumbers className='pl-8 pt-4 sm:pl-14 sm:pt-4 md:pl-14 md:pt-4 lg:pl-20 lg:pt-6 xl:pl-20 xl:pt-6 text-xl sm:text-3xl lg:text-4xl'>03</SectionNumbers>
                    <p className='px-6 text-center sm:text-start sm:p-0 md:px-6 lg:pl-20 lg:pr12 xl:pl-20 xl:pr-12 sm:py-3 md:py-4 lg:py-5 xl:py-7 text-[13px] sm:text-sm md:text-sm lg:text-base'>Somos una agencia creativa que combina estrategia y creatividad. Analizamos meticulosamente cada problema antes de proponer soluciones innovadoras y efectivas.</p>
                    {!isMobile && <Arrow className='float-end mx-16 py-0.5' />}
                </div>
                <div className='w-full h-72 sm:h-56 md:h-56 lg:h-64 xl:h-64 border-solid border-[1px] border-black-80 rounded-[70px] sm:rounded-[90px] bg-white'>
                    <SectionNumbers className='pl-8 pt-4 sm:pl-14 sm:pt-4 md:pl-14 md:pt-4 lg:pl-20 lg:pt-6 xl:pl-20 xl:pt-6 text-xl sm:text-3xl lg:text-4xl'>04</SectionNumbers>
                    <p className='px-6 text-center sm:text-start sm:p-0 md:px-6 lg:pl-20 lg:pr-8 xl:pl-20 xl:pr-8 sm:py-3 md:py-4 lg:py-5 xl:py-7 text-[13px] sm:text-sm md:text-sm lg:text-base'>Implementamos estrategias de marketing digital centradas en resultados medibles. Nos enfocamos en maximizar el crecimiento y el éxito continuo de tu negocio.</p>
                    {!isMobile && <Arrow className='float-end mx-16 py-0.5' />}
                </div>
            </div>
        </div>
    )
}
