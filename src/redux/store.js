import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  UPDATE_USERNAME,
  GET_CARDS,
  TOGGLE_CORRECT_MODAL,
  TOGGLE_INCORRECT_MODAL,
  TOGGLE_TIMEUP_MODAL,
  CLOSE_MODALS,
  ADD_POINT,
} from "./constants";

const initialState = {
  username: "",
  cards: [],
  isCorrectModalOpen: false,
  isIncorrectModalOpen: false,
  isTimeupModalOpen: false,
  points: 0,
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
    case TOGGLE_TIMEUP_MODAL: {
      return {
        ...state,
        isTimeupModalOpen: !state.isTimeupModalOpen,
      };
    }
    case CLOSE_MODALS: {
      return {
        ...state,
        isIncorrectModalOpen: false,
        isCorrectModalOpen: false,
        isTimeupModalOpen: false,
      };
    }
    case ADD_POINT: {
      return {
        ...state,
        points: state.points + 1,
      };
    }
    default:
      return state;
  }
}

const store = createStore(trivia, composeWithDevTools());

export default store;
