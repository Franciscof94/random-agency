import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string
}

export const SectionNumbers = ({ children, className }: Props) => {
    return (
        <div className={` font-medium ${className}`}>{children}</div>
    );
};