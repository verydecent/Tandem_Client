import React from "react";
import Question from "../question";
import Choice from "../choice";
import shortid from "shortid";
import { shuffle } from "../../helpers";
import { withRouter } from "react-router-dom";
import Incorrect from "../modals/incorrect";
import Correct from "../modals/correct";
import Timeup from "../modals/timeup";
import { connect } from "react-redux";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    console.log("props", this.props);
  }

  render() {
    const {
      cards,
      match,
      isCorrectModalOpen,
      isIncorrectModalOpen,
      isTimeupModalOpen,
    } = this.props;
    const id = parseInt(match.params.id);
    const { question, incorrect, correct } = cards[id];
    const choices = shuffle([...incorrect, correct]);

    return (
      <div className="card">
        {isCorrectModalOpen && <Correct />}
        {isIncorrectModalOpen && <Incorrect />}
        {isTimeupModalOpen && <Timeup />}

        <div className="question-section">
          <Question id={id} question={question} />
        </div>
        <div className="multiple-choice-section">
          {choices.map((choice, index) => (
            <Choice
              key={shortid.generate()}
              choice={choice}
              correct={correct}
              index={index}
            />
          ))}
        </div>
        {/*
          Makes reques to check
          Returns 0 or 1
          if 0 then tells you wrong message
          if 1 then got it right
          both will present next question button  
        */}
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({});

const mapState = (state) => ({
  cards: state.cards,
  isCorrectModalOpen: state.isCorrectModalOpen,
  isIncorrectModalOpen: state.isIncorrectModalOpen,
  isTimeupModalOpen: state.isTimeupModalOpen,
});

const CardWithRouter = withRouter(Card);

export default connect(mapState, mapDispatch)(CardWithRouter);
