import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/">Tandem</Link>
      <Link to="/trivia">Play</Link>
      <Link to="/leaderboard">Leaderboard</Link>
    </div>
  );
};

export default Navigation;
