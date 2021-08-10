import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Home(props) {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/multiplayer">{props.MultiPlayer}</Route>
        <Route path="/profile">{props.Profile}</Route>
        <Route path="/">{props.SinglePlayer}</Route>
      </Switch>
    </Router>
  );
}
