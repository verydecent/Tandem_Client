import React from "react";
import { connect } from "react-redux";

const UserCard = ({ username, points }) => {
  return (
    <div className="usercard">
      <h1 className="">Username: {username}</h1>
      <h1 className="">
        Points: <span className="underline">{points}</span>
      </h1>
    </div>
  );
};

const mapState = (state) => ({
  username: state.username,
  points: state.points,
});

export default connect(mapState)(UserCard);
