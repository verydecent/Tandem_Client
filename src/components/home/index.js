import React from "react";
import Navigation from "../navigation";
import { updateName } from "../../redux/actionCreators";
import { connect } from "react-redux";

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
              props.updateName();
            }}
          >
            <input type="text" placeholder="Your Name" />
            <button>Go!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  updateName: () => dispatch({ name: updateName() }),
});

export default connect(null, mapDispatch)(Home);
