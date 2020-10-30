import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { UPDATE_USERNAME, GET_CARDS } from "./constants";

const initialState = {
  username: "",
  cards: [],
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
    default:
      return state;
  }
}

const store = createStore(trivia, composeWithDevTools());

export default store;
