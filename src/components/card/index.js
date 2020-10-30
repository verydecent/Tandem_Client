import React from "react";
import withAnimation from "./withAnimation";
import Question from "../question";
import Choice from "../choice";

const Card = ({ card }) => {
  const question = <Question question={card.question} />;
  const choices =
    card &&
    [...card.incorrect, card.correct].map((choice) => (
      <Choice choice={choice} />
    ));

  return (
    <div className="card">
      <div className="question-section">{question}</div>
      <div className="multiple-choice-section">{choices}</div>
    </div>
  );
};

export default withAnimation(Card);
