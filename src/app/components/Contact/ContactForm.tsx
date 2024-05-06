import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import ShapeThree from '../../assets/ShapeThree.svg'
import ShapeFour from '../../assets/ShapeFour.svg'
import { CustomButton } from '../CustomButtons/Button'
import { CustomInput } from '../CustomInputs/CustomInput'
import { FormField } from '../FormField'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

interface Props {
    errorMessage: string
}

export const ContactForm = ({ errorMessage }: Props) => {
    const { register, formState: { errors, isSubmitting, isValid, isSubmitSuccessful } } = useFormContext()
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);


    useEffect(() => {
        if (isSubmitSuccessful) {
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 10000);
        }
        if (errorMessage) {
            setShowErrorMessage(true);
            setTimeout(() => {
                setShowErrorMessage(false);
            }, 10000);
        }
    }, [isSubmitSuccessful, errorMessage]);
    

    return (
        <div className="bg-white rounded-tl-[90px] rounded-br-[90px] relative">
            <div>
                <Image
                    src={ShapeFour}
                    width={116}
                    height={87}
                    alt="Shape"
                    className='absolute top-[-35px] right-0'
                />
            </div>
            <div >
                <div className='flex flex-col items-center justify-center pb-0 pt-8 sm:py-16'>
                    <div className='flex flex-col sm:flex-row mx-auto gap-x-20'>
                        <div className='py-1 sm:py-6'>
                            <FormField label="Nombre y apellido">
                                <CustomInput
                                    name='nameAndLastname'
                                    type='text'
                                    placeholder='Nombre y apellido'
                                    className='border-[2px] border-black-80 py-2 pl-2 pr-16'

                                />
                            </FormField>
                            <FormField label="Teléfono">
                                <CustomInput
                                    name='phone'
                                    type='text'
                                    placeholder='Teléfono'
                                    className='border-[2px] border-black-80 py-2 pl-2 pr-16'

                                />
                            </FormField>
                            <FormField label="Email">
                                <CustomInput
                                    name='email'
                                    type='text'
                                    placeholder='Email'
                                    className='border-[2px] border-black-80 py-2 pl-2 pr-16'
                                />
                            </FormField>
                        </div>
                        <div className='flex flex-col justify-between  sm:py-6'>
                            <FormField label="Mensaje">
                                <textarea
                                    {...register('message')}
                                    rows={5}
                                    className='border-[2px] border-black-80 pt-2 pl-2 pr-16 resize-none'
                                    placeholder='Mensaje'
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name='message'
                                    render={({ message }) => (
                                        <p className="text-[#ED4337] font-normal">{message}</p>
                                    )}
                                />
                            </FormField>
                            <CustomButton
                                disabled={!isValid}
                                className={`mt-4 sm:mt-0 w-full ${isValid ? 'bg-sky-blue' : "bg-[#ACC7C8]"}`}
                                type="submit"
                                isLoading={isSubmitting}
                            >
                                ENVIAR
                            </CustomButton>
                        </div>
                    </div>
                    {showSuccessMessage && (
                        <small className='text-emerald-500 text-base font-semibold'>
                            Gracias por comunicarte con nosotros, a la brevedad responderemos tu consulta.
                        </small>
                    )}
                    {showErrorMessage && (
                        <small className='text-red-500 text-base font-semibold'>{errorMessage}</small>
                    )}
                </div>
            </div>

            <div>
                <Image
                    src={ShapeThree}
                   
                    alt="Shape"
                    className='absolute bottom-[-59px] left-[-30px] shape-three-image'
                />
            </div>

        </div>
    )
}
