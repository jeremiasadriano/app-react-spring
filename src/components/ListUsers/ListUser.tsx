import { useEffect, useState } from "react"
import { Person } from "../../types/Person"
import { AxiosBaseURL, COOKIE_NAME } from "../../hooks/AppConfig"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

export default function ListUser() {
    const [users, setUsers] = useState<Person[] | null>(null)
    const navigate = useNavigate()
    const token = Cookies.get(COOKIE_NAME)

    async function fetchUsers() {
        try {
            const response = await AxiosBaseURL.get('/list', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const { data }: any = await response
            setUsers(data)
        } catch (error) {
            const { response }: any = error
            if (response.status == 401) {
                navigate("/login")
            }
        }
    }

    useEffect(() => {
        window.document.title = "List of Users"
        fetchUsers()
    }, [])

    return (
        <div>{users?.map((element) => (
            <ul key={element.id}>
                <li>{element.id}</li>
                <li>{element.name}</li>
                <li>{element.email}</li>
                <li>{element.password}</li>
                <li>{element.age}</li>
            </ul>
        ))}</div>
    )
}
