import React from "react";
import Navigation from "../navigation";
import Card from "../card";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Trivia = ({ cards, match }) => {
  const { id } = match.params;

  return (
    <div className="trivia">
      <Navigation />
      <Card card={cards && cards[id]} />
    </div>
  );
};

const TriviaWithRouter = withRouter(Trivia);

const mapState = (state) => ({
  cards: state.cards,
});

export default connect(mapState)(TriviaWithRouter);
