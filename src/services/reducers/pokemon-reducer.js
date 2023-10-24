export const SET_POKEMON = 'SET_POKEMON'
export const RENAME_BTN = 'RENAME_BTN'


const defaultState = { pokemon: null, btnText: "find pokemon" };

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return { ...state, pokemon: action.data };
    case RENAME_BTN:
      return { ...state, btnText: action.newBtnText };
    default:
      return state;
  }
};
