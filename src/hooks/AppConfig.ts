import axios from "axios";

export const COOKIE_NAME = import.meta.env.VITE_APP_COOKIE_AUTH_NAME;
const apiURL = import.meta.env.VITE_REACT_API_SERVER_URL;
export const api = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function postData<T = unknown>(url: string, data: unknown): Promise<T> {
  return api.post(url, data);
}

export async function fetchData<T = unknown>(url: string): Promise<T> {
  return api.get(url);
}
