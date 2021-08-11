import { useState, useEffect, useRef } from "react";

export default function useTimer(deadline, setDeadLine) {
  const [countDown, setCountDown] = useState(deadline * 60);
  const timerRef = useRef(null);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setCountDown((prevState) => prevState - 1);
    }, 100);

    if (countDown === 0) clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    let timerWidth = 0;

    timerWidth = (1 - countDown / (deadline * 60)) * 100;
    timerRef.current.style.width = `${timerWidth}%`;
  });

  useEffect(() => {
    if (countDown === 0) setDeadLine();
  });

  return timerRef;
}
