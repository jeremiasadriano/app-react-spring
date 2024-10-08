import { useEffect, useState } from "react";
import { IPerson } from "../../types/Person";
import { api } from "../../hooks/AppConfig";

export default function ListUser() {
  const [users, setUsers] = useState<IPerson[] | null>(null);

  async function fetchUsers() {
    try {
      const response = await api.get("/manager");
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
