import React from "react";
import withAnimation from "./withAnimation";

const Question = ({ question }) => <div className="question">{question}</div>;

export default withAnimation(Question);
