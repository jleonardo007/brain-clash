import { useState, useEffect } from "react";
import {
  initGame,
  closeScoreWindow,
  setCardFront,
  setCardBack,
  setScore,
} from "../handlers/single-player-board";

export default function useSinglePlayerBoard(singlePlayerState) {
  const { isDeadLineOver, cards } = singlePlayerState;
  const [boardState, setBoardState] = useState({
    points: 0,
    hits: 0,
    initGame: false,
    showScore: false,
    previousCard: "",
    currentCard: "",
    cardIndex: -1,
  });

  useEffect(() => {
    if (boardState.initGame) {
      if (isDeadLineOver || cards.every((card) => card.hasMatched))
        setBoardState((prevState) => {
          return {
            ...prevState,
            initGame: false,
            showScore: true,
          };
        });
    }
  });

  return {
    boardState,
    initGame: () => initGame(setBoardState),
    closeScoreWindow: () => closeScoreWindow(setBoardState),
    setCardFront: (cardProps) => setCardFront(cardProps, setBoardState),
    setCardBack: () => setCardBack(setBoardState),
    setScore: () => setScore(setBoardState),
  };
}
