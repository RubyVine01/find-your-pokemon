import { useSelector } from "react-redux";
import styles from "./pokemon-card.module.css";
import { nameLengthSelector } from "../services/selectors/pokemon-selectors";

export default function PokemonCard({ newPokemon }) {
  const nameLength = useSelector(nameLengthSelector);
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h2
          className={
            nameLength > 8
              ? `${styles.name} ${styles.greenText}`
              : nameLength > 7
              ? `${styles.name} ${styles.redText}`
              : styles.name
          }
        >
          {newPokemon.name}
        </h2>
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
