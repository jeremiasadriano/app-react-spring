import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Person } from "../../types/Person";
import { AxiosBaseURL, COOKIE_NAME } from "../../hooks/AppConfig";
import Cookies from "js-cookie";

export default function Register() {
    const [personData, setPersonData] = useState<Person | null>();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [userError, setUserError] = useState("");
    const [isUserErrorVisible, setUserErrorVisible] = useState(false);
    const navigate = useNavigate();

    async function registerPerson() {
        try {
            const response = await AxiosBaseURL.post("register", personData);
            const { token } = response.data;
            if (Cookies.get(COOKIE_NAME) != "" || Cookies.get(COOKIE_NAME) != null) {
                Cookies.remove(COOKIE_NAME);
                Cookies.set(COOKIE_NAME, token, { expires: 1, secure: true });
            }
            Cookies.set(COOKIE_NAME, token, { expires: 1, secure: true });
            navigate("/users");
        } catch (error) {
            const { response }: any = error;
            if (response.status == 406) {
                const { response }: any = error;
                const { message }: any = response.data;
                setUserError(message);
                setUserErrorVisible(true);
            }
        }
    }

    function formSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setPersonData({
            name: name,
            email: email,
            password: password,
            age: age,
        });
        registerPerson();
    }

    useEffect(() => {
        window.document.title = "Register";
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
                    <h2>Register</h2>
                </div>
                <div className="form">
                    <form onSubmit={(e) => formSubmit(e)}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="inputData"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="name"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="inputData"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="inputData"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="new-password"
                        />
                        <input type="date" className="inputData" value={age} onChange={(e) => setAge(e.target.value)} autoComplete="bday-year" />
                        <input type="submit" value="Register" className="inputSubmit" />
                        <p>
                            Do you any account? <Link to={"/login"}>Login</Link>
                        </p>
                    </form>
                    <h3 style={{ color: "red" }}>{isUserErrorVisible ? userError : ""}</h3>
                </div>
            </div>
        </div>
    );
}
