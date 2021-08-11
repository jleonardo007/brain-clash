import AvatarUploader from "../AvatarUploader";
import useForm from "../../hooks/use-form";
import "./styles.css";

export default function Form({ toggleForms, dispacth }) {
  const { responses, submitAuth } = useForm(toggleForms, dispacth);

  return (
    <form className="auth-form" onSubmit={(e) => submitAuth(e)}>
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
        <input type="password" name="password" className="password-input" required />
      </div>
      <div className="form-control">
        <label htmlFor="remember-me">
          <input type="checkbox" name="remember-me" className="keep-logged-input" />
          Remember me
        </label>
      </div>
      <div className="form-control">
        <button type="submit" className="submit-auth-btn">
          {toggleForms ? "Sign in!" : "Sign up!"}
        </button>
      </div>
    </form>
  );
}
