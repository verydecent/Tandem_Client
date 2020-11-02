import React from "react";
import { connect } from "react-redux";
import Timer from "../timer";

const UserCard = ({ username, points }) => {
  return (
    <div className="usercard">
      <Timer />
      <h1 className="usercard-name oj">{username}</h1>
      <h1 className="usercard-name">
        <span className="underline">{points}</span> Points
      </h1>
    </div>
  );
};

const mapState = (state) => ({
  username: state.username,
  points: state.points,
});

export default connect(mapState)(UserCard);
