import {
  UPDATE_USERNAME,
  TOGGLE_CORRECT_MODAL,
  TOGGLE_INCORRECT_MODAL,
} from "./constants";

export const updateUsername = (username) => ({
  type: UPDATE_USERNAME,
  username,
});

export const toggleCorrectModal = () => ({
  type: TOGGLE_CORRECT_MODAL,
});

export const toggleIncorrectModal = () => ({
  type: TOGGLE_INCORRECT_MODAL,
});
