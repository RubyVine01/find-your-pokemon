import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const defaultState = { pokemon: null };





const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_POKEMON":
      return { ...state, pokemon: action.data };
    default:
      return state;
  }
};

const store = createStore(reducer);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();


// const reducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case "GETPOKEMON":
//       request(url)
//       .then(data => {
//         // Используйте действие для установки данных
//         return { ...state, pokemon: data };
//       })
//       .catch(console.error);
//     return state;
//     default:
//       return state;
//   }
// };


// const reducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case "GETPOKEMON":
//       request(url)
//         .then((data) => {
//           // Используйте действие для установки данных
//           store.dispatch({ type: "SET_POKEMON", data }); // Здесь предполагается, что у вас есть действие "SET_POKEMON"
//         })
//         .catch(console.error);
//       return state; // Верните текущее состояние
//     case "SET_POKEMON":
//       return { ...state, pokemon: action.data };

//     default:
//       return state;
//   }
// };