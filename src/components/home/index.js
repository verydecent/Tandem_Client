import React from "react";
import Navigation from "../navigation";
import { updateUsername } from "../../redux/actionCreators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Will not make any requests until the end
// Or make requests with each question?

// Leaderboard always get request on mounting

const Home = (props) => {
  return (
    <div className="home">
      <Navigation />
      <div className="hero">
        <div className="hero-left">
          <h1 className="hero-title">Tandem Trivia Game</h1>
          <p className="hero-subtitle">
            Welcome to the Tandem's pop quiz, where you'll be able to learn more
            about the origins of Tandem
          </p>
          <p className="hero-subtitle">Enter your name to get started</p>
        </div>
        <div className="hero-right">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.history.push("/trivia");
            }}
          >
            <input
              onChange={(e) => props.updateUsername(e.target.value)}
              type="text"
              placeholder="Your Name"
              value={props.username}
            />
            <button>Go!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  username: state.username,
});

const mapDispatch = (dispatch) => ({
  updateUsername: (username) => dispatch({ type: updateUsername(), username }),
});

const HomeWithRouter = withRouter(Home);

export default connect(mapState, mapDispatch)(HomeWithRouter);
