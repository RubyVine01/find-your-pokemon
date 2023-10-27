import { createAsyncThunk } from "@reduxjs/toolkit";

export const pokemonDataThunk = createAsyncThunk(
  "pokemon/get",
  async (_, thunkAPI) => {
    try {
      const pokemonId = Math.floor(Math.random() * 1000);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log({ err });
      return thunkAPI.rejectWithValue(
        "Oops, there's been an error. Try again."
      );
    }
  }
);
