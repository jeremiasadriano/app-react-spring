import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./components/Login/Login"
import Register from "./components/register/Register"
import ListUser from "./components/ListUsers/ListUser"

const router = createBrowserRouter([{
  path: '/login',
  element: <Login />
},
{
  path: '/register',
  element: <Register />
}, {
  path: "/users",
  element: <ListUser />
}
])
export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
