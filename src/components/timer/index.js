import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { toggleTimeupModal } from "../../redux/actionCreators";
import { connect } from "react-redux";

const Timer = ({ toggleTimeup }) => (
  <CountdownCircleTimer
    isPlaying
    duration={10}
    colors={[["#509AFA", 1]]}
    onComplete={toggleTimeup}
    size={130}
    strokeWidth={18}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);

const mapDispatch = (dispatch) => ({
  toggleTimeup: () => dispatch(toggleTimeupModal()),
});

export default connect(null, mapDispatch)(Timer);
