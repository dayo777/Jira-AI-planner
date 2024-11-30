import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth";


export const Register = () => {
  const [user, setUser] = useState({
    UserName: "",
    Email: "",
  });



  const navigate = useNavigate();

  const {storeTokenInLS} = useAuth();



  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };


  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/Images/Regi&LPage.png"
                  alt="A Picture About Mental Health"
                  width="400"
                  height="500"
                />
              </div>

              {/* Registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="UserName"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.UserName}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
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
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};