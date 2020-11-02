import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { closeModals } from "../../redux/actionCreators";
import Button from "../button";

const Incorrect = ({
  // Values
  history,
  match,
  // Methods
  closeModals,
}) => {
  const lastQ = 20;
  const id = parseInt(match.params.id);
  const dynamicURL =
    id === lastQ ? "/leaderboard" : `/trivia/${parseInt(id) + 1}`;
  const nextQuestion = () => {
    closeModals();
    history.push(dynamicURL);
  };

  return (
    <div className="modal">
      <div className="modal-overlay" onClick={nextQuestion}></div>
      <div className="modal-content">
        <h1>Incorrect..</h1>
        <Button onClick={nextQuestion}>Next Question</Button>
      </div>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  closeModals: () => dispatch(closeModals()),
});

const IncorrectWithRouter = withRouter(Incorrect);

export default connect(null, mapDispatch)(IncorrectWithRouter);
