import { UPDATE_USERNAME, GET_CARDS } from "./constants";

export const updateUsername = (username) => ({
  type: UPDATE_USERNAME,
  username,
});
export const getCards = () => ({ type: GET_CARDS });
