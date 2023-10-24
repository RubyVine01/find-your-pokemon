import PokemonCard from "../../pokemon-card/pokemon-card";
import styles from "./main.module.css";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../../units/api";
import { renameBtnAction, setPokemonAction } from "../../services/actions/pokemon-actions";
import { btnTextSelector, pokemonDataSelector } from "../../services/selectors/pokemon-selectors";

export default function Main() {
  const dispatch = useDispatch();
  const newPokemon = useSelector(pokemonDataSelector);
  const newBtnText = useSelector(btnTextSelector);

  const getPokemon = () => {
    const pokemonId = Math.floor(Math.random() * 1017);
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    request(url)
      .then((data) => {
        dispatch(setPokemonAction(data));
      })
      .catch(console.error);

    if (newPokemon === null) {
      dispatch(renameBtnAction("try again"));
    }
  };

  return (
    <main className={styles.main}>
      {newPokemon !== null ? (
        <>
          <button className={styles.button} onClick={getPokemon}>
            {newBtnText}
          </button>
          <PokemonCard newPokemon={newPokemon} />
        </>
      ) : (
        <>
          <button className={styles.button} onClick={getPokemon}>
            find pokemon
          </button>
          <span className={styles.arrow}>↑</span>
          <p className={styles.text}>{newBtnText}</p>
        </>
      )}
    </main>
  );
}
