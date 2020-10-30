import React from "react";
import { connect } from "react-redux";
import {
  toggleCorrectModal,
  toggleIncorrectModal,
  addPoint,
} from "../../redux/actionCreators";
import Button from "../button";

const Choice = ({
  // Values
  choice,
  correct,
  // Methods
  addPoint,
  toggleCorrect,
  toggleIncorrect,
}) => {
  return (
    <div className="choice">
      <Button
        onClick={() => {
          if (correct === choice) {
            toggleCorrect();
            addPoint();
          } else {
            toggleIncorrect();
          }
        }}
      >
        {`${choice}`}
      </Button>
    </div>
  );
};

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({
  toggleCorrect: () => dispatch(toggleCorrectModal()),
  toggleIncorrect: () => dispatch(toggleIncorrectModal()),
  addPoint: () => dispatch(addPoint()),
});

export default connect(mapState, mapDispatch)(Choice);
