import { ErrorMessage } from '@hookform/error-message';
import React, { ChangeEvent, MouseEventHandler, useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
    type: string;
    className?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    maxLength?: number;
    readOnly?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick?: MouseEventHandler<HTMLInputElement>;
    name: string;

}

export const CustomInput = ({
    className,
    type,
    value,
    placeholder,
    disabled,
    required,
    readOnly,
    onChange,
    maxLength,
    onClick,
    name,

}: Props) => {
    const { register, setValue, formState: { errors } } = useFormContext();







    return (
        <div className="flex flex-col">
            <input
                {...register(name ?? '')}
                type={type}
                className={`${className} outline-0 `}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                maxLength={maxLength}

                onChange={onChange}

                readOnly={readOnly}
            />
            {errors[name] && (
                <div className="pt-2">
                    <ErrorMessage
                        errors={errors}
                        name={name ?? ''}
                        render={({ message }) => (
                            <p className="text-[#ED4337] font-normal">{message}</p>
                        )}
                    />
                </div>
            )}
        </div>
    );
};
