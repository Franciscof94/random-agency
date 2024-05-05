import React from 'react'
import { Label } from './Label';

interface Props {
    label: string;
    children: React.ReactNode
}

export const FormField = ({ label, children }: Props) => {
    return (
        <div className='flex flex-col'>
            <Label label={label} className='font-semibold py-2' />
            {children}
        </div>
    )
}
