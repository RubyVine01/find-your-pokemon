import { pokemonMiddleware } from "../middleware/pokemon-middleware.js";

import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice.js";
import pokemonDataReducer from "./pokemonDataSlice.js";

export const store = configureStore({
  reducer: { pokemon: pokemonReducer, pokemonData: pokemonDataReducer },
  //middleware: [pokemonMiddleware()],
});
