import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LeaderBoard from "./components/leaderboard";
import Home from "./components/home";
import Trivia from "./components/trivia";
import "./App.css";

const RouteWrapper = ({ cards }) => {
  return (
    <BrowserRouter>
      <div className="max-width-container">
        <Route exact path="/" component={Home} />
        <Route path="/trivia/:id" component={Trivia} />
        <Route path="/leaderboard" component={LeaderBoard} />
      </div>
    </BrowserRouter>
  );
};

export default RouteWrapper;
