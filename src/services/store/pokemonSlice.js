import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemon: null,
  btnText: "find pokemon",
  changed: new Date(),
  helpText: "click me",
  countClick: 0,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.pokemon = action.payload;
      state.changed = action.payload;
    },
    renameBtn: (state, action) => {
      state.btnText = action.payload;
    },
    setHelpText: (state, action) => {
      state.helpText = action.payload;
    },
    addCountClick: (state, action) => {
      state.countClick += action.payload;
    },
  },
});

export const { setPokemon, renameBtn, setHelpText, addCountClick } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
