import React from "react";
import Navigation from "../navigation";
import Card from "../card";
import UserCard from "../usercard";

const Trivia = () => {
  return (
    <div className="trivia">
      <Navigation />
      <UserCard />
      <Card />
    </div>
  );
};

export default Trivia;
