import { useReducer, useLayoutEffect } from "react";

import Auth from "./Components/Auth/Auth";
import Home from "./Components/Home/Home";
import Form from "./Components/Form/Form";

const initialState = {
  user: null,
  token: null,
  toggleForms: false,
};

function authReducer(authState, action) {
  switch (action.type) {
    case "AUTHENTICATE":
      return {
        ...authState,
        user: action.result.user,
        token: action.result.token,
      };

    case "GET_SAVED_CREDENTIALS":
      return {
        ...authState,
        user: action.credentials.savedUser,
        token: action.credentials.savedToken,
      };

    case "TOGGLE_FORMS":
      return {
        ...authState,
        toggleForms: !authState.toggleForms,
      };

    default:
      return authState;
  }
}

function App() {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  useLayoutEffect(() => {
    if (localStorage.user) {
      const savedUser = JSON.parse(localStorage.user);
      const savedToken = JSON.parse(localStorage.token);

      dispatch({ type: "GET_SAVED_CREDENTIALS", credentials: { savedUser, savedToken } });
    }
  }, []);

  /**
   * TODO: usar context para manejar la data user y token
   */

  return authState.user ? (
    <Home />
  ) : (
    <Auth
      toggleForms={authState.toggleForms}
      dispatch={dispatch}
      form={<Form toggleForms={authState.toggleForms} dispacth={dispatch} />}
    />
  );
}

export default App;
