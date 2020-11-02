import React from "react";
import Navigation from "../navigation";
import { updateUsername } from "../../redux/actionCreators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCardsHelper } from "../../helpers";
import NameInput from "../nameinput";

// Will not make any requests until the end
// Or make requests with each question?

// Leaderboard always get request on mounting

const Home = ({
  // Values
  username,
  history,
  // Methods
  updateUsername,
  getCards,
}) => {
  return (
    <div className="max-width-container">
      <div className="home">
        <Navigation />
        <div className="hero">
          <div className="hero-left">
            <h1 className="hero-title">Welcome!</h1>
            <h1 className="hero-title">
              <span className="oj">Tandem</span> Trivia Game
            </h1>
            <p className="hero-subtitle">
              <span className="underline"> Learn</span> about Tandem's origins
              other interesting life facts
            </p>
            <div className="hero-desc-section">
              <p className="hero-desc">
                Brought to you by:
                <a id="hero-link" href="https://madeintandem.com/">
                  &nbsp;Tandem
                </a>
              </p>
              <p className="hero-desc">
                Created by:
                <a id="hero-link" href="https://wonjaehwang.com/">
                  &nbsp;Wonjae
                </a>
              </p>
            </div>
          </div>
          <div className="hero-right">
            <NameInput
              username={username}
              onSubmit={(e) => {
                e.preventDefault();
                if (!username) {
                  console.log("write your username");
                } else {
                  getCards(() => history.push("/trivia/1"));
                }
              }}
              onChange={(e) => updateUsername(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  username: state.username,
});

const mapDispatch = (dispatch) => ({
  updateUsername: (username) => dispatch(updateUsername(username)),
  getCards: (cb) => getCardsHelper(dispatch, cb),
});

const HomeWithRouter = withRouter(Home);

export default connect(mapState, mapDispatch)(HomeWithRouter);
