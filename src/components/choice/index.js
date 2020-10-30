import React from "react";
import { connect } from "react-redux";
import {
  toggleCorrectModal,
  toggleIncorrectModal,
} from "../../redux/actionCreators";

const Choice = ({
  // Values
  choice,
  correct,
  index,
  // Methods
  toggleCorrect,
  toggleIncorrect,
}) => {
  return (
    <div className="choice">
      <button
        onClick={() => {
          console.log("clicked choice", correct === choice);
          if (correct === choice) {
            toggleCorrect();
          } else {
            toggleIncorrect();
          }
        }}
      >
        {`${index} ) ${choice}`}
      </button>
    </div>
  );
};

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({
  toggleCorrect: () => dispatch(toggleCorrectModal()),
  toggleIncorrect: () => dispatch(toggleIncorrectModal()),
});

export default connect(mapState, mapDispatch)(Choice);
