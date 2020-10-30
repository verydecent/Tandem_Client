import React from "react";
import Navigation from "../navigation";
import Card from "../card";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

const Trivia = ({ cards, match, history }) => {
  const { id } = match.params;

  return (
    <div className="trivia">
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
const mapState = (state) => ({ cards: state.cards });

export default connect(mapState, mapDispatch)(TriviaWithRouter);
