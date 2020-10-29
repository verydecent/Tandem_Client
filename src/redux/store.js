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
      let xhttp = new XMLHttpRequest();
      xhttp.open("GET", "http://localhost:4000/questions");
      xhttp.onload = () => {
        if (xhttp.status === 200) {
          return {
            ...state,
            cards,
          };
        } else {
          console.log(`${xhttp.status} ${xhttp.statusText}`);
        }
      };
    }
    default:
      return state;
  }
}

const store = createStore(trivia, composeWithDevTools());

export default store;
