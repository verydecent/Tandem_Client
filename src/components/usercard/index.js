import React from "react";
import { connect } from "react-redux";

const UserCard = ({ username, points }) => {
  return (
    <div className="usercard">
      <h1 className="">Tandem Trivia User Profile</h1>
      Username: {username}
      Points: {points}
    </div>
  );
};

const mapState = (state) => ({
  username: state.username,
  points: state.points,
});

export default connect(mapState)(UserCard);
