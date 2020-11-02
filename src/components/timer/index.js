import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { toggleTimeupModal } from "../../redux/actionCreators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Timer = ({ match, history, openTimeup }) => {
  const int = parseInt(match.params.id) + 1;
  const direction = int === 21 ? "/leaderboard" : `/trivia/${int}`;
  console.log("timer re render");
  return (
    <CountdownCircleTimer
      isPlaying
      duration={2}
      colors={"#509AFA"}
      onComplete={() => {
        history.push(direction);
        return [false, 0];
      }}
      size={130}
      strokeWidth={18}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
};

const mapDispatch = (dispatch) => ({
  openTimeup: () => {
    console.log("dispatch");
    dispatch(toggleTimeupModal());
  },
});

const TimerWithRouter = withRouter(Timer);

export default connect(null, mapDispatch)(TimerWithRouter);
