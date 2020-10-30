import React from "react";
import withAnimation from "./withAnimation";
import Question from "../question";
import Choice from "../choice";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import shortid from "shortid";

const Card = ({ question, choices, correct }) => {
  return (
    <div className="card">
      <Question question={question} />
      {choices.map((choice, index) => (
        <Choice key={shortid.generate()} choice={choice} index={index} />
      ))}
      {/* <div className="question-section">{question}</div>
      <div className="multiple-choice-section">{choices}</div> */}
    </div>
  );
};

const mapState = (state) => ({});
const mapDispatch = (dispatch, ownProps) => ({});

const CardWithAnimation = withAnimation(Card);

export default withRouter(CardWithAnimation);
