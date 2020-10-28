import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import LeaderBoard from "../components/leaderboard";
import Home from "../components/home";
import Trivia from "../components/trivia";

export const RouteWrapper = () => {
  return (
    <Router>
      <Routes path="/" component={Home} />
      <Routes path="/" component={Trivia} />
      <Routes path="/" component={LeaderBoard} />
    </Router>
  );
};
