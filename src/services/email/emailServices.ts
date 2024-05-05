import { axiosInstance } from "@/axios/axios";

interface IUser {
    nameAndLastname: string;
    phone: string;
    email: string;
    message: string
}

const EmailService = {
    postNewEmail: async (user: IUser) => {
      await axiosInstance.post("/send-email", user);
    }
}

export { EmailService as default };