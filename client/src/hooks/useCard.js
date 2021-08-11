import { useState, useEffect } from "react";
import { reverseCard } from "../handlers/card";

export default function useCard(props) {
  const defaultValue = localStorage.getItem(`${props.name}index:${props.index}`) || false;
  const [reverse, setReverse] = useState(defaultValue);
  const { previousCard, currentCard } = props.boardState;

  useEffect(() => {
    if (reverse) localStorage.setItem(`${props.name}index:${props.index}`, reverse);
    else localStorage.removeItem(`${props.name}index:${props.index}`);
  });

  useEffect(() => {
    if (previousCard === props.name || currentCard === props.name) {
      if (previousCard === currentCard) {
        localStorage.removeItem(`${props.name}index:${props.index}`);
        props.removeMatchedCards(currentCard);
        props.setScore();
      } else if (previousCard && currentCard) setReverse(false);
    }
  });

  return {
    reverse,
    reverseCard: () => reverseCard(setReverse),
  };
}
