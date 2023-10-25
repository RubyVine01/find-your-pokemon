import { RENAME_BTN, SET_HELP_TEXT, SET_POKEMON } from "../reducers/pokemon-reducer";

function setPokemonAction(payload) {
  const action = {
    type: SET_POKEMON,
    payload: {
      pokemon: payload,
      time: new Date(),
    },
  };
  return action;
}

function renameBtnAction(payload) {
  const action = {
    type: RENAME_BTN,
    payload: {
      btnText: payload
    },
  };
  return action;
}

function setHelpTextAction(payload) {
  const action = {
    type: SET_HELP_TEXT,
    payload: {
      helpText: payload
    },
  };
  return action;
}

export { setPokemonAction, renameBtnAction, setHelpTextAction };
