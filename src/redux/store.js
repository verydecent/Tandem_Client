import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { UPDATE_NAME } from "./constants";

const initialState = {
  playerName: "",
};

function trivia(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      console.log("===== redux UPDATE_NAME ==== ", action);
      return {
        ...state,
        playerName: action.name,
      };
    default:
      return state;
  }
}

const store = createStore(trivia, composeWithDevTools());

export default store;
