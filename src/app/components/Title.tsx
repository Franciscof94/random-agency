import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string
}

export const Title = ({ children, className }: Props) => {
    return (
        <div className={className}>{children}</div>
    );
};