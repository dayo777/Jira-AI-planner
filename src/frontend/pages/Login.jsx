import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Login = () => {
    const [user, setUser] = useState({
        Pdesc: "",
        Password: "",
    })

    // const navigate = useNavigate();
    // const {storeTokenInLS} = useAuth();

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
                <div className="container">

                    {/* login code  */}
                    <div className="login-form">
                        <h1 className="main-heading mb-3">Login</h1>
                        <br />
                        <form onSubmit={handleSubmit}>

                            <div>
                                <label htmlFor="Pdesc">Project Description</label>
                                <input
                                    type="text"
                                    name="Pdesc"
                                    id="Pdesc"
                                    required
                                    autoComplete="off"
                                    value={user.Pdesc}
                                    onChange={handleInput}
                                    placeholder="Project Description"
                                />
                            </div>


                            <div>
                                <label htmlFor="Timeline">Timeline - in weeks</label>
                                <input
                                    type="text"
                                    name="Timeline"
                                    id="Timeline"
                                    required
                                    autoComplete="off"
                                    value={user.Timeline}
                                    onChange={handleInput}
                                    placeholder="Timeline - in weeks"
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

