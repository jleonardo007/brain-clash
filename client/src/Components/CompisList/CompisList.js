import "./CompisList.css";

function CompisList({ user, token, navbar, dispatch }) {
  return (
    <section className="compis-list">
      {navbar}
      <h1>CompisList</h1>
    </section>
  );
}

export default CompisList;
