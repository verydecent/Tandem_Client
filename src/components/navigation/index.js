import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/">
        <div className="navigation-logo">Tandem</div>
      </Link>
      <ul className="navigation-menu-list">
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/trivia">Play</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
