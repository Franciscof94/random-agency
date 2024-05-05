import React from 'react'
import { SectionNumbers } from '../SectionNumber'
import { Arrow } from './Arrow'

export const Cards = () => {
    return (
        <div>
            <div className='flex'>
                <div className='min-w-[424px] h-64 border-solid border-[1px] border-black-80 rounded-[90px] bg-white'>
                    <SectionNumbers className='pl-20 pt-6'>01</SectionNumbers>
                    <p className='px-20 py-7'>Dialogamos y planteamos un reto para tu marca.</p>
                    <Arrow className='float-end mx-16 py-6' />
                </div>
                <div className='min-w-[655px] h-64 border-solid border-[1px] border-black-80 bg-white rounded-tl-[90px] rounded-br-[90px]'>
                    <SectionNumbers className='pl-20 pt-6'>02</SectionNumbers>
                    <p className='pl-20 pr-8 py-7'>Realizamos investigaciones, entrevistamos a representantes de grupos objetivo y evaluamos la competencia. Analizamos los resultados y extraemos conclusiones.</p>
                    <Arrow className='float-end mx-16 py-0.5' />
                </div>
            </div>
            <div className='flex'>
                <div className='min-w-[592px] h-64 border-solid border-[1px] border-black-80 bg-white rounded-br-[90px]'>
                    <SectionNumbers className='pl-20 pt-6'>03</SectionNumbers>
                    <p className='pl-20 pr-12 py-7'>Somos una agencia creativa, pero nuestras acciones son el resultado de una estrategia detallada. Solo después de un análisis exhaustivo del problema, dejamos volar nuestra imaginación y proponemos soluciones.</p>
                    <Arrow className='float-end mx-16 py-0.5' />
                </div>
                <div className='min-w-[486px] h-64 border-solid border-[1px] border-black-80 rounded-[90px] bg-white'>
                    <SectionNumbers className='pl-20 pt-6'>04</SectionNumbers>
                    <p className='pl-20 pr-8 py-7'>Implementamos estrategias de marketing digital centradas en resultados medibles. Nos enfocamos en maximizar el crecimiento y el éxito continuo de tu negocio.</p>
                    <Arrow className='float-end mx-16 py-0.5' />
                </div>
            </div>
        </div>
    )
}
