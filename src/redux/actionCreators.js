import { UPDATE_USERNAME, GET_CARDS } from "./constants";

export const updateUsername = (username) => ({
  type: UPDATE_USERNAME,
  username,
});

// export const getCards = () => {
//   axios
//     .get(`${process.env.REACT_APP_DEVELOPMENT_API}/questions`)
//     .then((response) => {
//       return { type: GET_CARDS, cards: response.data };
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
