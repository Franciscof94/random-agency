'use client'
import React from 'react'
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

    const methods = useForm<IForm>({
        resolver: yupResolver(FormSchema),
        mode: 'onChange'
    })
    const { handleSubmit, reset, formState: { errors } } = methods

    const onSubmit = async (data: IForm) => {
        try {
            await EmailService.postNewEmail(data)
            reset()
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Element name="contacto" className=''>
                    <Title className='text-3xl font-bold pb-12'>HABLEMOS</Title>
                    <p className='text-lg w-2/4 pr-6 pb-12'>Juntos podemos lograr algo grandioso. Cuéntanos qué necesita tu marca en este momento.</p>
                    <ContactForm />
                </Element>
            </form>
        </FormProvider>
    )
}
