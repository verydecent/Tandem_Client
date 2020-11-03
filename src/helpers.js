import axios from "axios";
import { GET_CARDS } from "./redux/constants";

export const shuffle = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const getCardsHelper = (dispatch, cb) => {
  return axios
    .get(`https://tandem-server.herokuapp.com/questions`)
    .then((response) => {
      dispatch({
        type: GET_CARDS,
        cards: response.data,
      });
      cb();
    })
    .catch((error) => console.log("error ====>", error));
};
