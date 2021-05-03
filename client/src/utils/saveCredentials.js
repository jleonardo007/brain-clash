/**
 * * Save logged user in localStorage
 */

function saveCredentials(credentials) {
  localStorage.setItem("user", JSON.stringify(credentials.user));
  localStorage.setItem("token", JSON.stringify(credentials.token));
}

export default saveCredentials;
