import styles from "./pokemon-card.module.css";

export default function PokemonCard({pokemonData}) {
  return (
    <div className={styles.card}>
        
      <img src={pokemonData.sprites.other['official-artwork'].front_default} alt="Pokemon"  />
    </div>
  );
}

