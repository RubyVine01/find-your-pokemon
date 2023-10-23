import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const defaultState = { pokemon: null, btnText: "find pokemon" };

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_POKEMON":
      return { ...state, pokemon: action.data, btnText: "try again" };
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
