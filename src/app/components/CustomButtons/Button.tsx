import React, { CSSProperties } from 'react';
import { PropagateLoader, ClipLoader, PuffLoader } from 'react-spinners';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type: "submit" | "reset" | "button";
    isLoading?: boolean;
    disabled?: boolean
}

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export const CustomButton = ({ children, className, onClick, type, isLoading, ...props }: ButtonProps) => {
    return (
        isLoading ? (
            <div className="h-[44px] flex items-center justify-center bg-sky-blue">
                <PuffLoader
                    color='#fff'
                    loading={isLoading}
                    cssOverride={override}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        ) : (
            <button
                type={type}
                className={`text-white font-bold py-2.5 px-4 ${className}`}
                onClick={onClick}
                {...props}
            >
                {children}
            </button>
        )
    );
};
