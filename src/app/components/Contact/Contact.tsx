'use client'
import React, { useState } from 'react'
import { Title } from '../Title'
import { ContactForm } from './ContactForm'
import { Element } from 'react-scroll'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormSchema } from '@/app/ValidationsSchemas/FormSchema'
import EmailService from '@/services/email/emailServices'

interface IForm {
    nameAndLastname: string;
    phone: string;
    email: string;
    message: string
}

export const Contact = () => {
    const [errorMessage, setErrorMessage] = useState('')

    const methods = useForm<IForm>({
        resolver: yupResolver(FormSchema),
        mode: 'all'
    })
    const { handleSubmit, reset } = methods

    const onSubmit = async (data: IForm) => {
        try {
            await EmailService.postNewEmail(data)
            reset()
        } catch (error) {
            setErrorMessage('Ha ocurrido un error inesperado, por favor vuelve a intentarlo.')
        }
    };


    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Element name="contacto" className=''>
                    <Title className='text-3xl font-bold pb-10'>HABLEMOS</Title>
                    <p className='text-lg w-2/4 pr-6 pb-12'>Juntos podemos lograr algo grandioso. Cuéntanos qué necesita tu marca en este momento.</p>
                    <ContactForm errorMessage={errorMessage} />
                </Element>
            </form>
        </FormProvider>
    )
}
