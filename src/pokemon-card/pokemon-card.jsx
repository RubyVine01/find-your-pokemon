import styles from "./pokemon-card.module.css";

export default function PokemonCard({pokemonData}) {
  return (
    <div className={styles.card}>
      <img src="/" alt="" />
    </div>
  );
}

//pokemonData.sprites.other['official-artwork'].front_default