import { object, string } from "yup";

export const FormSchema = object({
    nameAndLastname: string().required('Este campo es obligatorio'),
    phone: string().required('Este campo es obligatorio'),
    email: string().email('El formato de email es incorrecto').required('Este campo es obligatorio'),
    message: string().required('Este campo es obligatorio').min(10, 'Ingresa al menos 10 caracteres')
})