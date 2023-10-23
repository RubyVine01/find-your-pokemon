import { createStore } from "redux";
import { reducer } from "../reducers/pokemon-reducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(reducer, composeWithDevTools());
