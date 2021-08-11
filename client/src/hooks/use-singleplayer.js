import { useState, useEffect } from "react";
import { removeMatchedCards, selectLevel, setDeadLine } from "../handlers/singleplayer";
import loadBoard from "../utils/load-board";

export default function useSinglePlayer(user) {
  const [singleplayerState, setSingleplayerState] = useState({
    cols: 8,
    deadline: 7,
    isDeadLineOver: false,
    shouldRenderLevel: true,
    currentLevel: "level-one",
    cards: [],
  });

  const { levels } = user.singlePlayer;

  useEffect(() => {
    setSingleplayerState((prevState) => {
      return {
        ...prevState,
        cards: loadBoard(singleplayerState.cols),
      };
    });
  }, [singleplayerState.cols]);

  useEffect(() => {
    if (singleplayerState.isDeadLineOver)
      setSingleplayerState(() => {
        return {
          cols: 8,
          deadline: 7,
          isDeadLineOver: false,
          shouldRenderLevel: true,
          currentLevel: "level-one",
          cards: [],
        };
      });
    // mostrar un portal con game over
  }, [singleplayerState.isDeadLineOver]);

  /* useEffect(() => {
    if (
      singleplayerState.cards.length > 0 &&
      singleplayerState.cards.every((card) => card.hasMatched)
    )
      alert("Has ganando");
  }); */

  useEffect(() => {
    document.title = "Brain Clash Singleplayer";

    return () => (document.title = "Brain Clash");
  }, []);

  return {
    singleplayerState,
    removeMatchedCards: (cardName) => removeMatchedCards(cardName, setSingleplayerState),
    selectLevel: (level) => selectLevel(level, levels, setSingleplayerState),
    setDeadLine: () => setDeadLine(setSingleplayerState),
  };
}
