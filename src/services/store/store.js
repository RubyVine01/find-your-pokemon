// import { applyMiddleware, createStore } from "redux";
// import { reducer } from "../reducers/pokemon-reducer.js";
// import { composeWithDevTools } from "redux-devtools-extension";
// import {pokemonMiddleware} from "../middleware/pokemon-middleware.js"

// export const store = createStore(reducer, composeWithDevTools(applyMiddleware(pokemonMiddleware())));

import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice.js";

export const store = configureStore({
  reducer: { pokemon: pokemonReducer },
});
