import React from "react";
import Button from "../button";

const NameInput = ({
  // Values
  username,
  // Methods
  onSubmit,
  onChange,
}) => {
  return (
    <form className="name-input" onSubmit={onSubmit}>
      <h1 className="name-input-title">What's your name</h1>
      <input
        className="input"
        onChange={onChange}
        type="text"
        placeholder="name"
        value={username}
      />
      <Button>Go!</Button>
    </form>
  );
};

export default NameInput;
