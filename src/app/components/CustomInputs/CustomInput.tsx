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
    validation?: (value: string) => string | undefined;
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
    validation,
}: Props) => {
    const { register, setValue, formState: { errors, isSubmitted } } = useFormContext();

    const [values, setValues] = useState<{ [key: string]: any }>({});


    useEffect(() => {
        if (isSubmitted) {
            setValue(name, '')
        }
    }, [isSubmitted, setValue, name])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;


        if (validation) {
            const validatedValue = validation(inputValue);

            if (validatedValue !== undefined) {

                setValues({
                    ...values,
                    [name ?? '']: validatedValue
                })
                onChange?.(e);
            } else {

                setValues({
                    ...values,
                    [name ?? '']: values[name]
                })

            }
        } else {
            onChange?.(e);
        }
    };

    console.log(errors[name], errors)
    return (
        <div className="flex flex-col">
            <input
                {...register(name ?? '')}
                type={type}
                className={`${className} outline-0 `}
                value={values[name ?? '']}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                maxLength={maxLength}

                onChange={handleChange}

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
