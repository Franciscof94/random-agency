import axios from "axios";


console.log(process.env.NEXT_PUBLIC_URL_API)
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API,
});
export { axiosInstance };