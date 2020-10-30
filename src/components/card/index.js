import React from "react";
import Question from "../question";
import Choice from "../choice";
import shortid from "shortid";
import { shuffle } from "../../helpers";
import { Link, withRouter } from "react-router-dom";
import Incorrect from "../modals/incorrect";
import Correct from "../modals/correct";
import { connect } from "react-redux";

const Card = ({
  // values
  cards,
  match,
  isCorrectModalOpen,
  isIncorrectModalOpen,
}) => {
  const id = parseInt(match.params.id);
  const { question, incorrect, correct } = cards[id];
  const lastQ = 21;
  const dynamicURL = id === lastQ ? "/leaderboard" : `/trivia/${id + 1}`;
  const choices = shuffle([...incorrect, correct]);

  console.log(isCorrectModalOpen);

  return (
    <div className="card">
      {isCorrectModalOpen && <Correct />}
      {isIncorrectModalOpen && <Incorrect />}

      <div className="question-section">
        <Question id={id} question={question} />
      </div>
      <div className="multiple-choice-section">
        {choices.map((choice, index) => (
          <Choice
            key={shortid.generate()}
            choice={choice}
            correct={correct}
            index={index}
          />
        ))}
      </div>
      {/*
        Makes reques to check
        Returns 0 or 1
        if 0 then tells you wrong message
        if 1 then got it right
        both will present next question button  
      */}
    </div>
  );
};

const mapDispatch = (dispatch) => ({});

const mapState = (state) => ({
  cards: state.cards,
  isCorrectModalOpen: state.isCorrectModalOpen,
  isIncorrectModalOpen: state.isIncorrectModalOpen,
});

const CardWithRouter = withRouter(Card);

export default connect(mapState, mapDispatch)(CardWithRouter);
