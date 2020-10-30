import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LeaderBoard from "./components/leaderboard";
import Home from "./components/home";
import Trivia from "./components/trivia";
import "./App.css";
import { connect } from "react-redux";

const RouteWrapper = ({ cards }) => {
  return (
    <Router>
      <div className="max-width-container">
        <Route exact path="/" component={Home} />
        <Route path="/trivia/:id" component={Trivia} />
        <Route path="/leaderboard" component={LeaderBoard} />
      </div>
    </Router>
  );
};

const mapState = (state) => ({ cards: state.cards });

export default connect(mapState)(RouteWrapper);
