import { object, string } from "yup";

export const FormSchema = object({
  nameAndLastname: string()
    .required("Este campo es obligatorio")
    .min(4, "Ingresa al menos 4 caracteres")
    .test(
      "solo-letras",
      "No se permiten números",
      (value: string): any => {
        return value.match(/^[a-zA-Z\s]+$/);
      }
    ),
  phone: string()
    .required("Este campo es obligatorio")
    .min(4, "Ingresa al menos 4 caracteres")
    .test(
      "solo-numeros",
      "No se permiten letras",
      (value: string): any => {
        return value.match(/^[0-9]+$/);
      }
    ),
  email: string()
    .email("El formato de email es incorrecto")
    .required("Este campo es obligatorio"),
  message: string()
    .required("Este campo es obligatorio")
    .min(10, "Ingresa al menos 10 caracteres"),
});
