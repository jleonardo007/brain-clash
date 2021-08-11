import Auth from "./Components/Auth";
import Home from "./Components/Home";
import Form from "./Components/Form";
import Singleplayer from "./Components/Singleplayer";
import Multiplayer from "./Components/Multiplayer";
import Navbar from "./Components/Navbar";
import { Profile } from "./Components/Profile";
import useApp from "./hooks/use-app";

export default function App() {
  const { authState, dispatch } = useApp();

  return authState.user ? (
    <Home
      SinglePlayer={
        <Singleplayer
          user={authState.user}
          token={authState.token}
          Navbar={<Navbar user={authState.user} />}
          dispatch={dispatch}
        />
      }
      MultiPlayer={
        <Multiplayer
          user={authState.user}
          token={authState.token}
          Navbar={<Navbar user={authState.user} />}
          dispatch={dispatch}
        />
      }
      Profile={
        <Profile
          user={authState.user}
          token={authState.token}
          Navbar={<Navbar user={authState.user} />}
          dispatch={dispatch}
        />
      }
    />
  ) : (
    <Auth
      toggleForms={authState.toggleForms}
      dispatch={dispatch}
      Form={<Form toggleForms={authState.toggleForms} dispacth={dispatch} />}
    />
  );
}
