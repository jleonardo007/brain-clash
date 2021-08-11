import "./styles.css";

export default function GameInfo({ user, boardState, children }) {
  const { username, avatar } = user;
  const { points, hits } = boardState;

  return (
    <div className="player-info">
      <div className="avatar" style={{ backgroundImage: `url(${avatar.url})` }}></div>
      <h2 className="username">{username}</h2>
      <div className="score">
        <div className="points">
          <h2>Points:</h2>
          <span>{points}</span>
        </div>
        <div className="hits">
          <h2>Hits:</h2>
          <span>{hits}</span>
        </div>
      </div>
      {children}
    </div>
  );
}
