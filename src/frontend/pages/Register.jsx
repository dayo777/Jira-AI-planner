import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth";


export const Register = () => {
  const [user, setUser] = useState({
    Pdesc: "",
    Timeline: "",
  });



  // const navigate = useNavigate();

  // const { storeTokenInLS } = useAuth();



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
            <div className="container">

              {/* Registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="Pdesc">Project Description</label>
                    <input
                      type="text"
                      name="time"
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