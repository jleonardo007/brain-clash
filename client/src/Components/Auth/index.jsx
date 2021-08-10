import setToggleForms from "../../handlers/auth";
import "./Auth.css";

export default function Auth({ toggleForms, dispatch, Form }) {
  return (
    <section className="auth-section">
      <div className="form-container">
        <h1>Bring your mind to the battle</h1>
        <div className="tabs-container">
          <div
            className="signup-tab"
            onClick={() => {
              if (toggleForms) setToggleForms(dispatch);
            }}
            style={{ color: `${!toggleForms ? "#d97014" : ""}` }}
          >
            <span className="tab-text">Sign up</span>
          </div>
          <div
            className="signin-tab"
            onClick={() => {
              if (!toggleForms) setToggleForms(dispatch);
            }}
            style={{ color: `${toggleForms ? "#d97014" : ""}` }}
          >
            <span className="tab-text">Sign in</span>
          </div>
        </div>
        {Form}
      </div>
    </section>
  );
}
