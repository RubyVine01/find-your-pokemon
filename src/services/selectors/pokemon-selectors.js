export const pokemonDataSelector = (state) => state.pokemon;
export const btnTextSelector = (state) => state.btnText;
export const nameLengthSelector = (state) => {
  const nameLength = state.pokemon.name.length;
  return nameLength;
};

export const helpTextelector = (state) => state.helpText;