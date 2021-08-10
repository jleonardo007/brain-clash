import saveCredentials from "../utils/saveCredentials";

export default async function submitAuth(e, toggleForms, setResponses, dispatch) {
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
  else dispatch({ type: "AUTHENTICATE", result });

  if (keepUserLogged && authResponse.status === 200) saveCredentials(result);
}
