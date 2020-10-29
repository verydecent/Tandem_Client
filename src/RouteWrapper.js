import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import LeaderBoard from "./components/leaderboard";
import Home from "./components/home";
import Trivia from "./components/trivia";
import "./App.css";

export const RouteWrapper = () => {
  return (
    <Router>
      <div className="max-width-container">
        <Route exact path="/" component={Home} />
        <Route path="/trivia" component={Trivia} />
        <Route path="/leaderboard" component={LeaderBoard} />
      </div>
    </Router>
  );
};
