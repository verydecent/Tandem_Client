import React from "react";
import Navigation from "../navigation";
import Confetti from "react-confetti";

const LeaderBoard = () => {
  return (
    <div className="max-width-container">
      {/* <Confetti /> */}
      <div className="leaderboard">
        <Navigation />
        Thank you for playing!!!
      </div>
    </div>
  );
};

export default LeaderBoard;
