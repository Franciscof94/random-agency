import Image from 'next/image'
import React from 'react'
import ShapeThree from '../../assets/ShapeThree.svg'
import ShapeFour from '../../assets/ShapeFour.svg'
import { CustomButton } from '../CustomButtons/Button'
import { CustomInput } from '../CustomInputs/CustomInput'
import { FormField } from '../FormField'
import { validateOnlyLetters } from '@/app/utils/validateOnlyLetters'
import { validateOnlyNumbers } from '@/app/utils/validateOnlyNumbers'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'



export const ContactForm = () => {
    const { register, formState: { errors, isSubmitting, isValid } } = useFormContext()
console.log(isValid)
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
            <div className='flex justify-center '>
                <div className='py-16 flex mx-auto gap-x-20'>
                    <div className='py-6'>
                        <FormField label="Nombre y apellido">
                            <CustomInput
                                name='nameAndLastname'
                                type='text'
                                placeholder='Nombre y apellido'
                                className='border-[2px] border-black-80 py-2 pl-2 pr-16'
                                validation={validateOnlyLetters}
                            />
                        </FormField>
                        <FormField label="Teléfono">
                            <CustomInput
                                name='phone'
                                type='text'
                                placeholder='Teléfono'
                                className='border-[2px] border-black-80 py-2 pl-2 pr-16'
                                validation={validateOnlyNumbers}
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
                    <div className='flex flex-col justify-between py-6'>
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
                            className={`w-full ${isValid ? 'bg-sky-blue' : "bg-[#ACC7C8]"}`}
                            type="submit"
                            isLoading={isSubmitting}
                        >
                            ENVIAR
                        </CustomButton>
                    </div>
                </div>
            </div>
            <div>
                <Image
                    src={ShapeThree}
                    width={116}
                    height={87}
                    alt="Shape"
                    className='absolute bottom-[-59px] left-[-30px]'
                />
            </div>
        </div>
    )
}
