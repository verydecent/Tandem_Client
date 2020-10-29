import React from "react";

const Question = (Component) => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = { didMount: false };
    }
    render() {
      const { didMount } = this.state;
      return (
        <div className={fade-in `${didmount && 'visible'}`}>
          <Component {...this.props} />
        </div>
      )
    }
  };
};

export default Question;
