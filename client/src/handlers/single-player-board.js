export function initGame(setBoardState) {
  setBoardState((prevState) => {
    return {
      ...prevState,
      initGame: true,
    };
  });
}

export function closeScoreWindow(setBoardState) {
  setBoardState(() => {
    return {
      points: 0,
      hits: 0,
      initGame: false,
      showScore: false,
      previousCard: "",
      currentCard: "",
      cardIndex: -1,
    };
  });
}

export function setScore(setBoardState) {
  setBoardState((prevState) => {
    return {
      ...prevState,
      points: prevState.points + 50,
      hits: prevState.hits + 0.5,
      previousCard: "",
      currentCard: "",
      cardIndex: -1,
    };
  });
}

export function setCardFront(props, setBoardState) {
  setBoardState((prevState) => {
    if (!prevState.currentCard)
      return {
        ...prevState,
        currentCard: props.name,
        cardIndex: props.index,
      };
    else if (prevState.cardIndex !== props.index && !prevState.previousCard) {
      return {
        ...prevState,
        previousCard: prevState.currentCard,
        currentCard: props.name,
      };
    } else return prevState;
  });
}

export function setCardBack(setBoardState) {
  setBoardState((prevState) => {
    return {
      ...prevState,
      previousCard: "",
      currentCard: "",
      cardIndex: -1,
    };
  });
}
