import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import LeaderBoard from "./components/leaderboard";
import Home from "./components/home";
import Trivia from "./components/trivia";

export const RouteWrapper = () => {
  return (
    <Router>
      <Route path="/" component={Navigation} />
      <Route exact path="/" component={Home} />
      <Route path="/app" component={Trivia} />
      <Route path="/leaderboard" component={LeaderBoard} />
    </Router>
  );
};
