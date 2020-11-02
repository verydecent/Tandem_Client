import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { toggleTimeupModal } from "../../redux/actionCreators";
import { connect } from "react-redux";

const Timer = ({ openTimeup }) => {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={4}
      colors={"#509AFA"}
      onComplete={() => {
        openTimeup();
        return [false, 1000];
      }}
      size={130}
      strokeWidth={18}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
};

const mapDispatch = (dispatch) => ({
  openTimeup: () => dispatch(toggleTimeupModal()),
});

export default connect(null, mapDispatch)(Timer);
