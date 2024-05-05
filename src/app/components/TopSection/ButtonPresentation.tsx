import React from 'react'

export const ButtonPresentation = () => {
    return (
        <div className='flex gap-x-5'>
            {
                ['estrategia de marca', "campañas publicitarias", "asesorias"].map((item, i) => (
                    <div key={i} className="border-solid border-[1px] border-black-80 py-2 px-5 font-medium text-xl">{item}</div>
                ))
            }
        </div>
    )
}
