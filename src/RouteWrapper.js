import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LeaderBoard from "./components/leaderboard";
import Home from "./components/home";
import Trivia from "./components/trivia";
import "./App.css";
import { connect } from "react-redux";

const RouteWrapper = ({ cards }) => {
  return (
    <BrowserRouter>
      <div className="max-width-container">
        <Route exact path="/" component={Home} />
        <Route path="/leaderboard" component={LeaderBoard} />
        <Route path="/trivia/:id" component={Trivia} />
      </div>
    </BrowserRouter>
  );
};

const mapState = (state) => ({ cards: state.cards });

export default connect(mapState)(RouteWrapper);
