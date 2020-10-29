import React from "react";
import Navigation from "../navigation";
import Card from "../card";

class Trivia extends React.Component {
  constructor() {
    super();
    this.state = {
      didMount: false,
      cards: [],
    };
  }
  componentDidMount() {
    // API call and while asyn, it'll show loading bar
    const endpoint = "http://localhost:4000/questions";
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", endpoint);
    xhttp.onload = () => {
      if (xhttp.status === 200) {
        console.log("Response", JSON.parse(xhttp.response));
        const cards = JSON.parse(xhttp.response);
        this.setState({ didMount: true, cards });
      } else {
        console.log(`error ${xhttp.status} ${xhttp.statusText}`);
      }
    };
    xhttp.send();
  }

  render() {
    const { didMount, cards } = this.state;

    if (didMount) {
      return (
        <div className="trivia">
          <Navigation />
          {cards && cards.map((card) => <Card card={card} />)}
          <div className="question-section"></div>
          <div className="multiple-choice-section"> </div>
        </div>
      );
    } else {
      return (
        <div className="trivia">
          <Navigation />
          Loading...
        </div>
      );
    }
  }
}

export default Trivia;
