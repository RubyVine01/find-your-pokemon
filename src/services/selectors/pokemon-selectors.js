export const pokemonDataSelector = (store) => store.pokemon.pokemon;
export const btnTextSelector = (store) => store.pokemon.btnText;
export const nameLengthSelector = (store) => {
  const nameLength = store.pokemon.pokemon.name.length;
  return nameLength;
};

export const helpTextelector = (store) => store.pokemon.helpText;