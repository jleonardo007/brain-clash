import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/**
 * * Usar effect cleanup en Home para guardar el token actual en el localStorage para cuando
 * * el usuario cierre el navegador
 * * Si el token está vencido, usar el evento de error de jwt para generar otro.
 */

function Home(props) {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/singleplayer">{props.singleplayer}</Route>

        <Route path="/multiplayer">{props.multiplayer}</Route>

        <Route path="/compis-list">{props.compis}</Route>

        <Route path="/profile">{props.profile}</Route>

        <Route path="/ranking">{props.ranking}</Route>

        <Route path="/">{props.singleplayer}</Route>
      </Switch>
    </Router>
  );
}

export default Home;
