import React from "react";

const Question = ({ id, question }) => (
  <div className="question">
    <h1>Question {id}</h1>
    <h1>{question}</h1>
  </div>
);

export default Question;
