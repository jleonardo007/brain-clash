import { useState } from "react";

import AvatarUploader from "../AvatarUploader/AvatarUploader";
import "./Form.css";
import saveCredentials from "../../utils/saveCredentials";

function Form({ toggleForms, dispacth }) {
  const [responses, setResponses] = useState("");

  async function handleSubmitAuth(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const email = fd.get("email");
    const keepUserLogged = fd.get("remember-me");

    if (!toggleForms) {
      fd.append("username", email.split("@")[0]);
      fd.append("signupDate", new Date(Date.now()));
      fd.append("signinDate", new Date(Date.now()));
    } else {
      fd.append("signinDate", new Date(Date.now()));
    }

    const authResponse = await fetch(
      `http://localhost:5000/users/${toggleForms ? "signin" : "signup"}`,
      {
        method: "POST",
        body: fd,
      }
    );

    const result = await authResponse.json();

    if (authResponse.status === 401 || authResponse.status === 500) setResponses(result);
    else dispacth({ type: "AUTHENTICATE", result });

    if (keepUserLogged && authResponse.status === 200) saveCredentials(result);
  }

  return (
    <form className="auth-form" onSubmit={(e) => handleSubmitAuth(e)}>
      {responses && (
        <div className="server-unauth-responses">
          <span className="response">{responses.reason}</span>
        </div>
      )}
      {!toggleForms && (
        <div className="form-control avatar-control">
          <AvatarUploader />
        </div>
      )}
      <div className="form-control">
        <label>Email</label>
        <input type="email" name="email" className="email-input" required />
      </div>
      <div className="form-control">
        <label>Password</label>
        <input type="password" name="password" required />
      </div>
      <div className="form-control">
        <label htmlFor="remember-me">
          <input type="checkbox" name="remember-me" id="remember-me" />
          Remember me
        </label>
      </div>
      <div className="form-control">
        <button type="submit" className="submit-btn">
          {toggleForms ? "Sign in!" : "Sign up!"}
        </button>
      </div>
    </form>
  );
}

export default Form;
