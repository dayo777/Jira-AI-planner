import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Login = () => {
    const [user, setUser] = useState({
        Email: "",
        Password: "",
    })

    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    }


    return <><section>
        <main>
            <div className="section-login">
                <div className="container grid grid-two-cols">
                    <div className="login-image reg-img">
                        <img
                            src="/Images/Login.png"
                            alt="A Picture About Mental Health"
                            width="460"
                            height="450"
                        />
                    </div>

                    {/* login code  */}
                    <div className="login-form">
                        <h1 className="main-heading mb-3">Login</h1>
                        <br />
                        <form onSubmit={handleSubmit}>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    name="Email"
                                    id="email"
                                    required
                                    autoComplete="off"
                                    value={user.Email}
                                    onChange={handleInput}
                                    placeholder="email"
                                />
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="Password"
                                    id="password"
                                    required
                                    autoComplete="off"
                                    value={user.Password}
                                    onChange={handleInput}
                                    placeholder="password"
                                />
                            </div>
                            <br />
                            <button type="submit" className="btn btn-submit">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section></>
}

