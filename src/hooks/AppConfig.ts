import axios from "axios";

export const COOKIE_NAME = import.meta.env.VITE_APP_COOKIE_AUTH_NAME
const apiURL = import.meta.env.VITE_REACT_API_SERVER_URL
export const AxiosBaseURL = axios.create({
    baseURL: apiURL,
    headers: {
        "Content-Type": "application/json"
    }
})