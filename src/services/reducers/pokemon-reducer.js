export const SET_POKEMON = "SET_POKEMON";
export const RENAME_BTN = "RENAME_BTN";

const defaultState = {
  pokemon: null,
  btnText: "find pokemon",
  changed: new Date(),
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return {
        ...state,
        pokemon: action.payload.pokemon,
        changed: action.payload.time,
      };
    case RENAME_BTN:
      return {
        ...state,
        btnText: action.payload.btnText,
        changed: action.payload.time,
      };
    default:
      return state;
  }
};
