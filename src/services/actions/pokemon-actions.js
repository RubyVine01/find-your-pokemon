import { RENAME_BTN, SET_POKEMON } from "../reducers/pokemon-reducer";

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
      btnText: payload,
      time: new Date(),
    },
  };
  return action;
}

export { setPokemonAction, renameBtnAction };
