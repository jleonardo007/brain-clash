import { useEffect } from "react";
import useCard from "../../hooks/useCard";
import brain from "../../assets/brain.png";
import "./styles.css";

/**
 *
 * * Timeout in both CardBack and CardFront useEffect has
 * * the purpose to make a smooth transition when some of
 * * this components "mounts" or "unmounts".
 *
 */

function CardFront(props) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (props.reverse) props.setCardFront(props);
    }, 500);

    return () => clearTimeout(timeout);
  });

  return (
    <div
      onClick={props.reverseCard}
      className="card"
      data-card-name={props.name}
      style={{
        backgroundImage: `url(${props.path})`,
      }}
    />
  );
}

function CardBack(props) {
  useEffect(() => {
    let timeout = setTimeout(() => {
      if (props.boardState.cardIndex === props.index) props.setCardBack();
    }, 500);

    return () => clearTimeout(timeout);
  });

  return (
    <div
      onClick={props.reverseCard}
      className="card"
      style={{
        backgroundImage: `url(${brain})`,
      }}
    />
  );
}

export default function Card(props) {
  const { reverse, reverseCard } = useCard(props);
  const { setCardFront, setCardBack } = props.cardHandlers;

  return reverse ? (
    <CardFront
      name={props.name}
      path={props.path}
      index={props.index}
      reverse={reverse}
      boardState={props.boardState}
      setCardFront={setCardFront}
      reverseCard={reverseCard}
    />
  ) : (
    <CardBack
      name={props.name}
      index={props.index}
      reverse={reverse}
      boardState={props.boardState}
      setCardBack={setCardBack}
      reverseCard={reverseCard}
    />
  );
}
