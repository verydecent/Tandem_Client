import React from "react";
import withAnimation from "./withAnimation";
import Question from "../question";

const Card = ({ card }) => (
  <div className="card">
    <Question question={card.question} />
  </div>
);

export default withAnimation(Card);
