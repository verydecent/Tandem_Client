import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { closeModals } from "../../redux/actionCreators";

const Correct = ({
  // Values
  history,
  match,
  // Methods
  closeModals,
}) => {
  const lastQ = "21";
  const id = parseInt(match.params.id);
  const dynamicURL =
    id === lastQ ? "/leaderboard" : `/trivia/${parseInt(id) + 1}`;

  return (
    <div className="modal">
      <div className="modal-overlay"></div>
      <div className="modal-content">
        <h1>Correct</h1>
      </div>

      <button
        onClick={() => {
          closeModals();
          history.push(dynamicURL);
        }}
      >
        Next Question
      </button>
    </div>
  );
};

const CorrectWithRouter = withRouter(Correct);
const mapDispatch = (dispatch) => ({
  closeModals: dispatch(closeModals()),
});
export default connect(null, mapDispatch)(CorrectWithRouter);
