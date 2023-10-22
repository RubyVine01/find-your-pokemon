import styles from "./pokemon-card.module.css";

export default function PokemonCard({ pokemonData }) {
  return (
    <div className={styles.card}>
      <img
        src={pokemonData.sprites.other["official-artwork"].front_default}
        alt="Pokemon"
      />
      <h2>{pokemonData.name}</h2>
      <ul>
        {pokemonData.stats.map((entry) => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
