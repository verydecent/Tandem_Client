import React from "react";

const Question = ({ id, question }) => (
  <div className="question">
    <h1>Question {id}</h1>
    <h2>{question}</h2>
  </div>
);

export default Question;
