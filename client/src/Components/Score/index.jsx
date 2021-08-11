import "./Score.css";

export default function Score({ points, hits, closeScoreWindow, children }) {
  return (
    <div className="modal-container">
      <div className="score-container">
        {!children ? (
          <div className="score-title">
            <h1>You win!!</h1>
          </div>
        ) : (
          children
        )}
        <div className="score">
          <div className="points">
            <h2>Points:</h2>
            <span>{points}</span>
          </div>
          <div className="hits">
            <h2>Hits:</h2>
            <span>{hits}</span>
          </div>
          <div className="badges">
            <h2>Badge:</h2>
            <div className="badge"></div>
          </div>
        </div>
        <div className="score-btn">
          <button onClick={closeScoreWindow}>Close!</button>
        </div>
      </div>
    </div>
  );
}
