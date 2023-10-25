import PokemonCard from "../../pokemon-card/pokemon-card";
import styles from "./main.module.css";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../../units/api";
import {
  btnTextSelector,
  pokemonDataSelector,
  helpTextelector,
} from "../../services/selectors/pokemon-selectors";
import {
  renameBtn,
  setHelpText,
  setPokemon,
} from "../../services/store/pokemonSlice";

export default function Main() {
  const dispatch = useDispatch();
  const newPokemon = useSelector(pokemonDataSelector);
  const newBtnText = useSelector(btnTextSelector);
  const helpText = useSelector(helpTextelector);

  console.log(newPokemon);
  
  const getPokemon = () => {
    const pokemonId = Math.floor(Math.random() * 1500);

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    request(url)
      .then((data) => {
        dispatch(setPokemon(data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(setPokemon("error"));
        dispatch(setHelpText("Oops, there's been an error. Try again."));
      });

    if (!newPokemon === null) {
      dispatch(renameBtn("try again"));
    }
  };

  return (
    <main className={styles.main}>
      {newPokemon !== null && newPokemon !== "error" ? (
        <>
          <button className={styles.button} onClick={getPokemon}>
            {newBtnText}
          </button>
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
