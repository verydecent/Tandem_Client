import React from "react";
import Question from "../question";
import Choice from "../choice";
import shortid from "shortid";
import { shuffle } from "../../helpers";
import { Link, withRouter } from "react-router-dom";

const Card = ({ card, match }) => {
  console.log("Card render()", card);
  const { question, incorrect, correct } = card;
  const { id } = match.params;
  const lastQ = "21";

  const choices = shuffle([...incorrect, correct]);
  const dynamicURL =
    id === lastQ ? "/leaderboard" : `/trivia/${parseInt(id) + 1}`;

  return (
    <div className="card">
      <div className="question-section">
        <Question question={question} />
      </div>
      <div className="multiple-choice-section">
        {choices.map((choice, index) => (
          <Choice key={shortid.generate()} choice={choice} index={index} />
        ))}
      </div>
      {/*
        Makes reques to check
        Returns 0 or 1
        if 0 then tells you wrong message
        if 1 then got it right
        both will present next question button  
      */}
      <button>Check Answer</button>
      <Link to={dynamicURL}>Next Question</Link>
    </div>
  );
};

export default withRouter(Card);
