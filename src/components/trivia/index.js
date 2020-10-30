import React from "react";
import Navigation from "../navigation";
import Card from "../card";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import Incorrect from "../modals/incorrect";
import Correct from "../modals/correct";

const Trivia = ({ cards, match, isCorrectModalOpen, isIncorrectModalOpen }) => {
  const { id } = match.params;

  return (
    <div className="trivia">
      {isCorrectModalOpen && Correct}
      {isIncorrectModalOpen && Incorrect}

      <Navigation />
      <Card card={cards[id]} />
      <Link to={id < 21 ? `/trivia/${parseInt(id) + 1}` : "/leaderboard"}>
        Check Answer Link
      </Link>
    </div>
  );
};

const TriviaWithRouter = withRouter(Trivia);

const mapDispatch = (dispatch) => ({});

const mapState = (state) => ({
  cards: state.cards,
  isCorrectModalOpen: state.isCorrectModalOpen,
  isIncorrectModalOpen: state.isIncorrectModalOpen,
});

export default connect(mapState, mapDispatch)(TriviaWithRouter);
