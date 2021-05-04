import "./Singleplayer.css";

function Singleplayer({ user, token, navbar, dispatch }) {
  return (
    <section className="singleplayer">
      {navbar}
      <h1>SinglePlayer</h1>
    </section>
  );
}

export default Singleplayer;
