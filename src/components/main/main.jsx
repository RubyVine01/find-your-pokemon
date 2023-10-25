import PokemonCard from "../../pokemon-card/pokemon-card";
import styles from "./main.module.css";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../../units/api";
import {
  btnTextSelector,
  pokemonDataSelector,
  helpTextSelector,
  countClickSelector,
} from "../../services/selectors/pokemon-selectors";
import {
  renameBtn,
  setHelpText,
  setPokemon,
  addCountClick,
} from "../../services/store/pokemonSlice";

export default function Main() {
  const dispatch = useDispatch();
  const newPokemon = useSelector(pokemonDataSelector);
  const newBtnText = useSelector(btnTextSelector);
  const helpText = useSelector(helpTextSelector);
  const countClick = useSelector(countClickSelector);

  console.log(newPokemon);

  const getPokemon = () => {
    const pokemonId = Math.floor(Math.random() * 1200);

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    request(url)
      .then((data) => {
        dispatch(setPokemon(data));
        dispatch(renameBtn("try again"));
        dispatch(addCountClick(1));
      })
      .catch((error) => {
        console.error(error);
        dispatch(setPokemon("error"));
        dispatch(setHelpText("Oops, there's been an error. Try again."));
        dispatch(renameBtn("try again"));
      });
  };

  // store.dispatch(
  //   setHelpText("You've exhausted all attempts. ")
  // );

  return (
    <main className={styles.main}>
      {newPokemon !== null && newPokemon !== "error" ? (
        <>
          {countClick >= 10 ? (
            <>
              <button disabled className = {`${styles.button} ${styles.button_disable } ` }onClick={getPokemon}>
                {newBtnText}
              </button>
              <p className={styles.text}>Number of attempts: {countClick}/10</p>
              <p className={styles.error}>You've exhausted all attempts.</p>
            </>
          ) : (
            <>
              <button className={styles.button} onClick={getPokemon}>
                {newBtnText}
              </button>
              <p className={styles.text}>Number of attempts: {countClick}/10</p>
              <p className={styles.error}>
                You have {10 - countClick} attempts
              </p>
            </>
          )}

          <PokemonCard newPokemon={newPokemon} />
        </>
      ) : (
        <>
          <button className={styles.button} onClick={getPokemon}>
            {newBtnText}
          </button>
          <span className={styles.arrow}>↑</span>
          <p className={styles.text}>{helpText}</p>
        </>
      )}
    </main>
  );
}
