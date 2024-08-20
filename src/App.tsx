import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useEffect } from "react";
import { api, COOKIE_NAME } from "./hooks/AppConfig";
import Cookies from "js-cookie";

export default function App() {
  useEffect(() => {
    const token = Cookies.get(COOKIE_NAME);
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }, []);
  return <RouterProvider router={router} />;
}
