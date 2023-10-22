import styles from "./pokemon-card.module.css";

export default function PokemonCard({ newPokemon }) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h2 className={styles.name}>{newPokemon.name}</h2>
        <ul className={styles.list}>
          {newPokemon.stats.map((entry) => (
            <li key={entry.stat.name}>
              {entry.stat.name}: {entry.base_stat}
            </li>
          ))}
        </ul>
      </div>
      <img
        className={styles.image}
        src={newPokemon.sprites.other["official-artwork"].front_default}
        alt="Pokemon"
      />
    </div>
  );
}
