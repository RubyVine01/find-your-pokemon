import PokemonCard from "../../pokemon-card/pokemon-card";
import styles from "./main.module.css";

export default function Main({ pokemonData, getPokemonData }) {
  return (
    <main className={styles.main}>
      {pokemonData !== null ? (
        <>
          <button className={styles.button} onClick={getPokemonData}>
            try again
          </button>
          <PokemonCard pokemonData={pokemonData} />
        </>
      ) : (
        <>
          <button className={styles.button} onClick={getPokemonData}>
            find pokemon
          </button>
          <span className={styles.arrow}>↑</span>
          <p className={styles.text}>click me</p>
        </>
      )}
    </main>
  );
}
