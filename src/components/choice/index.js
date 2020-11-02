import React from "react";
import { connect } from "react-redux";
import {
  toggleCorrectModal,
  toggleIncorrectModal,
  addPoint,
} from "../../redux/actionCreators";

const Choice = ({
  // Values
  choice,
  correct,
  index,
  // Methods
  addPoint,
  toggleCorrect,
  toggleIncorrect,
}) => {
  return (
    <button
      className="choice"
      onClick={() => {
        if (correct === choice) {
          toggleCorrect();
          addPoint();
        } else {
          toggleIncorrect();
        }
      }}
    >
      <span className="choice-circle">{index}</span>
      {choice}
    </button>
  );
};

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({
  toggleCorrect: () => dispatch(toggleCorrectModal()),
  toggleIncorrect: () => dispatch(toggleIncorrectModal()),
  addPoint: () => dispatch(addPoint()),
});

export default connect(mapState, mapDispatch)(Choice);
