import React from 'react'

interface Props {
    label: string;
    className?: string
}

export const Label = ({ label, className }: Props) => {
    return (
        <label className={className}>{label}</label>
    )
}
