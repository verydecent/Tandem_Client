import {
  UPDATE_USERNAME,
  TOGGLE_CORRECT_MODAL,
  TOGGLE_INCORRECT_MODAL,
  CLOSE_MODALS,
  ADD_POINT,
  TOGGLE_TIMEUP_MODAL,
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

export const closeModals = () => ({
  type: CLOSE_MODALS,
});

export const addPoint = () => ({
  type: ADD_POINT,
});

export const toggleTimeupModal = () => ({
  type: TOGGLE_TIMEUP_MODAL,
});
