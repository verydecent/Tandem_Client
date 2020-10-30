import { UPDATE_USERNAME, GET_CARDS } from "./constants";
import axios from "axios";

export const updateUsername = (username) => ({
  type: UPDATE_USERNAME,
  username,
});

export const getCards = () => {
  axios
    .get(`${process.env.REACT_APP_DEVELOPMENT_API}/questions`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  return { type: GET_CARDS, cards: [] };
};
