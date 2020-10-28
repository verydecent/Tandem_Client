import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LeaderBoard from "../components/leaderboard";
import Home from "../components/home";
import Trivia from "../components/trivia";

export const RouteWrapper = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/" component={Trivia} />
      <Route path="/" component={LeaderBoard} />
    </Router>
  );
};
