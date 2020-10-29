import React from "react";
import Navigation from "../navigation";

const Trivia = () => {
  return (
    <div className="trivia">
      <Navigation />
      <div className="question-section">
        Question: What was Tandem previous name?
      </div>
      <div className="multiple-choice-section">a: b: c: d:</div>
    </div>
  );
};

export default Trivia;
