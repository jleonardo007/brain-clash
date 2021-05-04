import "./Multiplayer.css";

function Multiplayer({ user, token, navbar, dispatch }) {
  return (
    <section className="multiplayer">
      {navbar}
      <h1>Multiplayer</h1>
    </section>
  );
}

export default Multiplayer;
