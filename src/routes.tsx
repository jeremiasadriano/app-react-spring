import { createBrowserRouter } from "react-router-dom";
import ListUser from "./components/ListUsers/ListUser";
import Login from "./components/Login/Login";
import Register from "./components/register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ListUser />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/users",
    element: <ListUser />,
  },
]);
