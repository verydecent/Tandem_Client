import React from "react";
import Navigation from "../navigation";
import Card from "../card";
import { withRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

class Trivia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      question: "",
      choices: [],
      correct: "",
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios
      .get(`${process.env.REACT_APP_DEVELOPMENT_API}/questions/${id}`)
      .then((response) => {
        const choices = [...response.data.incorrect, response.data.correct];
        console.log("choices", choices);
        this.setState({
          isLoading: false,
          question: response.data.question,
          choices: choices,
          correct: response.data.correct,
        });
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    const { isLoading, question, choices, correct } = this.state;

    if (isLoading) {
      return <div className="loading">Loading...</div>;
    } else {
      return (
        <div className="trivia">
          <Navigation />
          <Card question={question} choices={choices} correct={correct} />
        </div>
      );
    }
  }
}

const TriviaWithRouter = withRouter(Trivia);
const mapDispatch = (dispatch) => ({});
const mapState = (state) => ({});

export default connect(mapState, mapDispatch)(TriviaWithRouter);
