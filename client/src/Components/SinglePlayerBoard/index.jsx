import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card";
import Score from "../Score";
import GameInfo from "../GameInfo";
import useSinglePlayerBoard from "../../hooks/use-singleplayer-board";
import generateKey from "../../utils/generate-key";
import "./Board.css";

const modalroot = document.getElementById("modal-root");

export default function Board(props) {
  const { boardState, initGame, closeScoreWindow, setScore, ...cardHandlers } =
    useSinglePlayerBoard(props.singlePlayerState);
  const { shouldRenderLevel, cols, cards, isDeadLineOver } = props.singlePlayerState;
  const { selectLevel, removeMatchedCards } = props.singlePlayerHandlers;

  return (
    <>
      {
        <GameInfo user={props.user} boardState={boardState}>
          <div className="levels">
            <h2>Levels</h2>
            <select
              name="levels-selector"
              className="levels-selector"
              onChange={(e) => selectLevel(e.target.value)}
            >
              <option value="level-one">Level 1</option>
              <option value="level-two">Level 2</option>
              <option value="level-three">Level 3</option>
              <option value="level-four">Level 4</option>
              <option value="level-five">Level 5</option>
            </select>
          </div>
        </GameInfo>
      }
      {shouldRenderLevel ? (
        boardState.initGame ? (
          <div className="singleplayer-board">
            {props.Timer}
            <div className="board-container">
              <div className="board" style={{ gridTemplateColumns: `repeat(${cols}, 3.5vw)` }}>
                {cards.map((card, index) =>
                  !card.hasMatched ? (
                    <Card
                      key={generateKey()}
                      name={card.name}
                      index={index}
                      path={card.path}
                      boardState={boardState}
                      cardHandlers={cardHandlers}
                      setScore={setScore}
                      removeMatchedCards={removeMatchedCards}
                    />
                  ) : (
                    <div className="matched-card" key={generateKey()}></div>
                  )
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="init-game">
            <button className="init-game-btn" onClick={initGame}>
              Init game!
            </button>
          </div>
        )
      ) : (
        <div className="level-blocked">
          <div className="lock-icon">
            <FontAwesomeIcon icon={faLock} size="5x" />
          </div>
          <h2>Level locked</h2>
          <p>Pass the previous level to unlock this.</p>
        </div>
      )}

      {boardState.showScore && isDeadLineOver
        ? createPortal(
            <Score
              points={boardState.points}
              hits={boardState.hits}
              closeScoreWindow={closeScoreWindow}
            >
              <div className="score-title">
                <h1>You lose!!</h1>
              </div>
            </Score>,
            modalroot
          )
        : cards.every((card) => card.hasMatched) &&
          createPortal(
            <Score
              points={boardState.points}
              hits={boardState.hits}
              closeScoreWindow={closeScoreWindow}
            />,
            modalroot
          )}
    </>
  );
}
