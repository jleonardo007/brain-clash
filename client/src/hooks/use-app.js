import { useReducer, useLayoutEffect } from "react";

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

    case "UPDATE_USER":
      return {
        ...authState,
        user: action.user,
      };

    case "NEW_TOKEN":
      return {
        ...authState,
        token: action.token,
      };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default function useApp() {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  useLayoutEffect(() => {
    if (localStorage.user) {
      const savedUser = JSON.parse(localStorage.user);
      const savedToken = JSON.parse(localStorage.token);

      dispatch({ type: "GET_SAVED_CREDENTIALS", credentials: { savedUser, savedToken } });
    }
  }, []);

  return {
    authState,
    dispatch,
  };
}
