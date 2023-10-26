import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  btnText: "find pokemon",
  helpText: "click me",
  countClick: 0,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
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

export const { renameBtn, setHelpText, addCountClick } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
