import React from "react";
import { connect } from "react-redux";

// const UserCard = ({ username, points }) => {
//   return (
//     <div className="usercard">
//       <h1 className="">
//         Points: <span className="underline">{points}</span>
//         <p>{Timer()}</p>
//       </h1>
//       <h1 className="">Username: {username}</h1>
//     </div>
//   );
// };

class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { username, points } = this.props;

    return (
      <div className="usercard">
        <h1 className="usercard-name oj">{username}</h1>
        <h1 className="usercard-name">
          <span className="underline">{points}</span> Points
        </h1>
      </div>
    );
  }
}

const mapState = (state) => ({
  username: state.username,
  points: state.points,
});

export default connect(mapState)(UserCard);
