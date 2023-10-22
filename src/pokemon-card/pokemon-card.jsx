import styles from "./pokemon-card.module.css";

export default function PokemonCard({ pokemonData }) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h2 className={styles.name}>{pokemonData.name}</h2>
        <ul className={styles.list}>
          {pokemonData.stats.map((entry) => (
            <li key={entry.stat.name}>
              {entry.stat.name}: {entry.base_stat}
            </li>
          ))}
        </ul>
      </div>
      <img
        className={styles.image}
        src={pokemonData.sprites.other["official-artwork"].front_default}
        alt="Pokemon"
      />
    </div>
  );
}
