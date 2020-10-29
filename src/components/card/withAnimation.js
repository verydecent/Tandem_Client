import React from "react";
import "./styles.css";

const withAnimation = (Component) => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = { didMount: false };
    }
    componentDidMount() {
      setTimeout(() => this.setState({ didMount: true }), 0);
    }
    render() {
      const { didMount } = this.state;
      return (
        <div className={`fade-in ${didMount && "visible"}`}>
          <Component {...this.props} />
        </div>
      );
    }
  };
};

export default withAnimation;
