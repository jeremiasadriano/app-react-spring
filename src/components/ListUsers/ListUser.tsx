import { useEffect, useState } from "react";
import { Person } from "../../types/Person";
import { AxiosBaseURL, COOKIE_NAME } from "../../hooks/AppConfig";
import Cookies from "js-cookie";

export default function ListUser() {
  const [users, setUsers] = useState<Person[] | null>(null);
  const token = Cookies.get(COOKIE_NAME);

  async function fetchUsers() {
    try {
      const response = await AxiosBaseURL.get("/manager");
      const { data }: any = await response;
      setUsers(data);
    } catch (error) {}
  }

  useEffect(() => {
    window.document.title = "List of Users";
    fetchUsers();
  }, []);

  return (
    <div>
      {users?.map((element) => (
        <ul key={element.id}>
          <li>{element.id}</li>
          <li>{element.name}</li>
          <li>{element.email}</li>
          <li>{element.password}</li>
          <li>{element.age}</li>
        </ul>
      ))}
    </div>
  );
}
