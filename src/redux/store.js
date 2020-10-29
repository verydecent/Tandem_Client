import { createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
console.log(reducer);

const store = createStore(reducer, composeWithDevTools());

export default store;
