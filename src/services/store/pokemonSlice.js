import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemon: null,
  btnText: "find pokemon",
  changed: new Date(),
  helpText: "click me",
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
  },
});

export const { setPokemon, renameBtn, setHelpText } = pokemonSlice.actions;
export default pokemonSlice.reducer;
