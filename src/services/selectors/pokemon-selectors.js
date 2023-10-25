export const pokemonDataSelector = (store) => store.pokemon.pokemon;
export const btnTextSelector = (store) => store.pokemon.btnText;
export const nameLengthSelector = (store) => {
  const nameLength = store.pokemon.pokemon.name.length;
  return nameLength;
};

export const helpTextSelector = (store) => store.pokemon.helpText;
export const countClickSelector = (store) => store.pokemon.countClick;