import PokemonCard from "../../pokemon-card/pokemon-card";
import styles from "./main.module.css";

export default function Main({ pokemonData, getPokemonData }) {
  return (
    <main className={styles.main}>
      <button onClick={getPokemonData}>chose</button>
      <PokemonCard pokemonData={pokemonData} />
    </main>
  );
}
