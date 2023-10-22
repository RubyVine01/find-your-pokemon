import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { request } from "./units/api";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const defaultState = { pokemonData: null };


function getPokemonData() {
  request(url)
    .catch(console.error);
}

console.log(getPokemonData())

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "GETPOKEMON":
//       const newState = {... state, pokemonData: getPokemonData() };
//   }
// };

// const store = createStore();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
