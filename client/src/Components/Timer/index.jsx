import useTimer from "../../hooks/use-timer";
import "./Timer.css";

export default function Timer({ deadline, setDeadLine }) {
  const timerRef = useTimer(deadline, setDeadLine);

  return (
    <div className="timer-container">
      <div className="timer-bar" ref={timerRef}></div>
    </div>
  );
}
