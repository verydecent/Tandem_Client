import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { UPDATE_NAME } from "./constants";

const initialState = {
  playerName: "",
};

// Reducer
function trivia(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        playerName: action.type,
      };
    default:
      return state;
  }
}

const store = createStore(trivia, composeWithDevTools());

export default store;
