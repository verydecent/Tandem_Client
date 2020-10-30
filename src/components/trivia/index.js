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
    // let xhttp = new XMLHttpRequest();
    // xhttp.open("GET", endpoint);
    // xhttp.onload = () => {
    //   if (xhttp.status === 200) {
    //     const cards = JSON.parse(xhttp.response);
    //     this.setState({ didMount: true, cards });
    //   } else {
    //     console.log(`error ${xhttp.status} ${xhttp.statusText}`);
    //   }
    // };
    // xhttp.send();
  }

  render() {
    const { didMount, cards } = this.state;

    if (didMount) {
      return (
        <div className="trivia">
          <Navigation />
          {cards &&
            cards.map((card, index) => <Card card={card} cardId={index} />)}
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
