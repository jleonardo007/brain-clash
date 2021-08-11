export function removeMatchedCards(cardName, setSingleplayerState) {
  setSingleplayerState((prevState) => {
    prevState.cards.forEach((card, index, cards) => {
      if (card.name === cardName) cards[index] = { ...card, hasMatched: true };
    });

    return {
      ...prevState,
    };
  });
}

export function setDeadLine(setSingleplayerState) {
  setSingleplayerState((prevState) => {
    return {
      ...prevState,
      isDeadLineOver: true,
    };
  });
}

export function selectLevel(level, userLevels, setSingleplayerState) {
  switch (level) {
    case "level-two":
      if (userLevels.includes("level-one"))
        setSingleplayerState((prevState) => {
          return {
            ...prevState,
            cols: 8,
            deadline: 5,
            currentLevel: level,
            shouldRenderLevel: true,
          };
        });
      else
        setSingleplayerState((prevState) => {
          return {
            ...prevState,
            shouldRenderLevel: false,
          };
        });
      break;

    case "level-three":
      if (userLevels.includes("level-two"))
        setSingleplayerState((prevState) => {
          return {
            ...prevState,
            cols: 10,
            deadline: 5,
            currentLevel: level,
            shouldRenderLevel: true,
          };
        });
      else
        setSingleplayerState((prevState) => {
          return {
            ...prevState,
            shouldRenderLevel: false,
          };
        });
      break;

    case "level-four":
      if (userLevels.includes("level-three"))
        setSingleplayerState((prevState) => {
          return {
            ...prevState,
            cols: 12,
            deadline: 7,
            currentLevel: level,
            shouldRenderLevel: true,
          };
        });
      else
        setSingleplayerState((prevState) => {
          return {
            ...prevState,
            shouldRenderLevel: false,
          };
        });
      break;

    case "level-five":
      if (userLevels.includes("level-four"))
        setSingleplayerState((prevState) => {
          return {
            ...prevState,
            cols: 14,
            deadline: 9,
            currentLevel: level,
            shouldRenderLevel: true,
          };
        });
      else
        setSingleplayerState((prevState) => {
          return {
            ...prevState,
            shouldRenderLevel: false,
          };
        });
      break;

    case "level-one":
    default:
      setSingleplayerState((prevState) => {
        return {
          ...prevState,
          cols: 8,
          deadline: 7,
          currentLevel: "level-one",
          shouldRenderLevel: true,
        };
      });
      break;
  }
}
