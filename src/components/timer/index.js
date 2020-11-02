import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => (
  <CountdownCircleTimer
    isPlaying
    duration={10}
    colors={[["#509AFA", 1]]}
    onComplete={() => console.log("complete!")}
    size={130}
    strokeWidth={18}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);

export default Timer;
