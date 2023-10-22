import PokemonCard from "../../pokemon-card/pokemon-card";
import styles from "./main.module.css";

export default function Main({ pokemonData, getPokemonData }) {
  return (
    <main className={styles.main}>
      <button className={styles.button} onClick={getPokemonData}>
        find pokemon
      </button>
      {pokemonData !== null ? (
        <PokemonCard pokemonData={pokemonData} />
      ) : (
        <>
          <span className={styles.arrow}>↑</span>
          <p className={styles.text}>click me</p>
        </>
      )}
    </main>
  );
}
