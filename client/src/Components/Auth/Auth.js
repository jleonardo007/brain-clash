import "./Auth.css";

function Auth({ toggleForms, dispatch, form }) {
  function handleToggleForms() {
    dispatch({ type: "TOGGLE_FORMS" });
  }

  return (
    <section className="auth-section">
      <div className="form-container">
        <h1>Bring your mind to the battle</h1>
        <div className="tabs-container">
          <div
            className="signup-tab"
            onClick={() => {
              if (toggleForms) handleToggleForms();
            }}
            style={{ color: `${!toggleForms ? "#d97014" : ""}` }}
          >
            <span className="tab-text">Sign up</span>
          </div>
          <div
            className="signin-tab"
            onClick={() => {
              if (!toggleForms) handleToggleForms();
            }}
            style={{ color: `${toggleForms ? "#d97014" : ""}` }}
          >
            <span className="tab-text">Sign in</span>
          </div>
        </div>
        {form}
      </div>
    </section>
  );
}

export default Auth;
