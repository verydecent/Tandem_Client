import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/">
        <div className="navigation-logo">Home</div>
      </Link>
      <ul className="navigation-menu-list">
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
