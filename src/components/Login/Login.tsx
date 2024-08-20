import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useEffect, useState } from "react";
import { IPerson, IPersonLogin, IPersonResponse } from "../../types/Person";
import { api, COOKIE_NAME, postData } from "../../hooks/AppConfig";
import ErrorHandling from "../ErrorHandler/ErrorHandling";
import Cookies from "js-cookie";
export default function Login() {
  const [personData, setPersonData] = useState<IPersonLogin | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginPerson() {
    try {
      await postData<IPersonResponse>("/login", personData).then((resp) => console.log(resp.token));
      navigate("/users");
    } catch (error) {
      ErrorHandling(error);
    }
  }

  function formLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPersonData({ email: email, password: password });
    loginPerson();
  }

  useEffect(() => {
    window.document.title = "Login";
    Cookies.remove(COOKIE_NAME);
  }, []);

  return (
    <div className="login-main">
      <div className="left">
        <h1>
          Wel<span style={{ color: "lightgreen" }}>come</span>
        </h1>
      </div>
      <div className="right">
        <div className="logo-right">
          <h2>Login</h2>
        </div>
        <div className="form">
          <form onSubmit={(e) => formLogin(e)}>
            <input type="email" placeholder="Email" className="inputData" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" className="inputData" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" value="Login" className="inputSubmit" />
            <p>
              You don't have any account? <Link to={"/register"}>create</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
