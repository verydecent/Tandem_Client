import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { UPDATE_USERNAME } from "./constants";

const initialState = {
  username: "",
};

// Reducer
function trivia(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
}

const store = createStore(trivia, composeWithDevTools());

export default store;
