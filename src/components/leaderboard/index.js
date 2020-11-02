import React from "react";
import Navigation from "../navigation";
import Confetti from "react-confetti";
import { connect } from "react-redux";

const LeaderBoard = ({ points }) => {
  return (
    <div className="max-width-container">
      <div className="leaderboard">
        <Confetti />
        <Navigation />
        <div>
          <div className="leaderboard-text">You scored {points} points!</div>
          <span className="leaderboard-text">
            Thank you for playing, if you have time please check out more of my
            other works&nbsp;
          </span>
          <span className="center">
            <a id="leaderboard-link" href="https://www.wonjaehwang.com">
              here
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  points: state.points,
});

export default connect(mapState)(LeaderBoard);
