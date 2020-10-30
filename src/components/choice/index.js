import React from "react";

const Choice = ({ choice, index }) => {
  const num = `${index} )  `;
  return (
    <div className="choice">
      {num} {choice}
    </div>
  );
};

export default Choice;
