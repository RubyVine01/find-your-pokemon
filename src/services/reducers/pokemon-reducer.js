export const SET_POKEMON = "SET_POKEMON";
export const RENAME_BTN = "RENAME_BTN";
export const SET_HELP_TEXT = "SET_HELP_TEXT";

const defaultState = {
  pokemon: null,
  btnText: "find pokemon",
  changed: new Date(),
  helpText: "click me",
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
      };
    case SET_HELP_TEXT:
      return {
        ...state,
        helpText: action.payload.helpText,
      };
    default:
      return state;
  }
};
