import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home(props) {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/multiplayer">{props.multiplayer}</Route>

        <Route path="/profile">{props.profile}</Route>

        <Route path="/">{props.singleplayer}</Route>
      </Switch>
    </Router>
  );
}

export default Home;
