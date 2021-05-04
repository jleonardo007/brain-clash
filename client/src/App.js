import { useReducer, useLayoutEffect } from "react";

import Auth from "./Components/Auth/Auth";
import Home from "./Components/Home/Home";
import Form from "./Components/Form/Form";
import Singleplayer from "./Components/Singleplayer/Singleplayer";
import Multiplayer from "./Components/Multiplayer/Multiplayer";
import Ranking from "./Components/Ranking/Ranking";
import CompisList from "./Components/CompisList/CompisList";
import { Profile } from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";

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

function App() {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  useLayoutEffect(() => {
    if (localStorage.user) {
      const savedUser = JSON.parse(localStorage.user);
      const savedToken = JSON.parse(localStorage.token);

      dispatch({ type: "GET_SAVED_CREDENTIALS", credentials: { savedUser, savedToken } });
    }
  }, []);

  return authState.user ? (
    <Home
      singleplayer={
        <Singleplayer
          user={authState.user}
          token={authState.token}
          navbar={<Navbar user={authState.user} />}
          dispatch={dispatch}
        />
      }
      multiplayer={
        <Multiplayer
          user={authState.user}
          token={authState.token}
          navbar={<Navbar user={authState.user} />}
          dispatch={dispatch}
        />
      }
      ranking={<Ranking token={authState.token} navbar={<Navbar user={authState.user} />} />}
      compis={
        <CompisList
          user={authState.user}
          token={authState.token}
          navbar={<Navbar user={authState.user} />}
          dispatch={dispatch}
        />
      }
      profile={
        <Profile
          user={authState.user}
          token={authState.token}
          navbar={<Navbar user={authState.user} />}
          dispatch={dispatch}
        />
      }
    />
  ) : (
    <Auth
      toggleForms={authState.toggleForms}
      dispatch={dispatch}
      form={<Form toggleForms={authState.toggleForms} dispacth={dispatch} />}
    />
  );
}

export default App;
