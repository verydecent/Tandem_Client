import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  UPDATE_USERNAME,
  GET_CARDS,
  TOGGLE_CORRECT_MODAL,
  TOGGLE_INCORRECT_MODAL,
} from "./constants";

const initialState = {
  username: "",
  cards: [],
  isCorrectModalOpen: false,
  isIncorrectModalOpen: false,
};

// Reducer
function trivia(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    case GET_CARDS: {
      return {
        ...state,
        cards: action.cards,
      };
    }
    case TOGGLE_CORRECT_MODAL: {
      return {
        ...state,
        isCorrectModalOpen: !state.isCorrectModalOpen,
      };
    }
    case TOGGLE_INCORRECT_MODAL: {
      return {
        ...state,
        isIncorrectModalOpen: !state.isIncorrectModalOpen,
      };
    }
    default:
      return state;
  }
}

const store = createStore(trivia, composeWithDevTools());

export default store;
