import Timer from "../Timer";
import Board from "../SinglePlayerBoard";
import useSinglePlayer from "../../hooks/use-singleplayer";
import "./styles.css";

export default function Singleplayer({ user, token, Navbar, dispatch }) {
  const { singleplayerState, ...handlers } = useSinglePlayer(user);

  return (
    <section className="singleplayer">
      {Navbar}
      <div className="singleplayer-container">
        <Board
          user={user}
          singlePlayerState={singleplayerState}
          singlePlayerHandlers={handlers}
          Timer={<Timer deadline={singleplayerState.deadline} setDeadLine={handlers.setDeadLine} />}
        />
      </div>
    </section>
  );
}
