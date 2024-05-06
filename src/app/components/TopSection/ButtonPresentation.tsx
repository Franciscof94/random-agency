import React from 'react'

export const ButtonPresentation = () => {
    return (
        <div className='flex justify-between sm:justify-start gap-x-2 sm:xl:gap-x-2 md:xl:gap-x-5 lg:xl:gap-x-5 xl:gap-x-5'>
            {
                ['estrategia de marca', "campañas publicitarias", "asesorias"].map((item, i) => (
                    <div
                        key={i}
                        className="border-solid border-[1px] border-black-80 py-2 sm:py-1 md:py-1 lg:py-2 xl:py-2 md:px-2 sm:px-[1px] px-[4px] lg:px-5 xl:px-5 font-medium text-[11px] sm:text-lg md:text-base lg:text-base xl:text-xl"
                    >
                        {item}
                    </div>
                ))
            }
        </div>
    )
}
