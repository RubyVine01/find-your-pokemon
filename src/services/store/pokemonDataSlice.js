import { createSlice } from "@reduxjs/toolkit";
import { pokemonDataThunk } from "../middleware/pokemonDataThunk";

const initialState = {
  pokemonData: null,
  isloading: false,
  error: "",
};

const pokemonDataSlice = createSlice({
  name: "pokemonData",
  initialState,
  reducers: {
  },
  extraReducers: {
    [pokemonDataThunk.fulfilled.type]: (state, action) => {
      state.pokemonData = action.payload;
      state.isloading = false;
      state.error = "";
    },
    [pokemonDataThunk.pending.type]: (state) => {
      state.isloading = true;
      state.error = "";
    },
    [pokemonDataThunk.rejected.type]: (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    },
  },
});

export const { pokemonDataLoading, pokemonDataLoaded, pokemonDataErrorLoad } =
  pokemonDataSlice.actions;
export default pokemonDataSlice.reducer;


// pokemonDataLoading: (state) => {
    //   state.isloading = true;
    //   state.error = "";
    // },
    // pokemonDataLoaded: (state, action) => {
    //   state.pokemonData = action.payload;
    //   state.isloading = false;
    //   state.error = "";
    // },
    // pokemonDataErrorLoad: (state, action) => {
    //   state.isloading = false;
    //   state.error = action.payload;
    // },