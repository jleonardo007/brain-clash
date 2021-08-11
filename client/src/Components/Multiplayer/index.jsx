import "./Multiplayer.css";

export default function Multiplayer({ user, token, Navbar, dispatch }) {
  return (
    <section className="multiplayer">
      {Navbar}
      <h1>Multiplayer</h1>
    </section>
  );
}
