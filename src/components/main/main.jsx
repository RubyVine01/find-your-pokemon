import PokemonCard from "../../pokemon-card/pokemon-card";
import styles from "./main.module.css";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../../units/api";
import {
  btnTextSelector,
  helpTextSelector,
  countClickSelector,
} from "../../services/selectors/pokemon-selectors";
import {
  renameBtn,
  setHelpText,
  addCountClick,
} from "../../services/store/pokemonSlice";
import { useEffect } from "react";
import {
  pokemonDataLoaded,
  pokemonDataLoading,
} from "../../services/store/pokemonDataSlice";
import {
  isloadingSelector,
  pokemonDataSelector,
} from "../../services/selectors/pokemon-data-selectors";

export default function Main() {
  const dispatch = useDispatch();
  const newPokemon = useSelector(pokemonDataSelector);
  const newBtnText = useSelector(btnTextSelector);
  const helpText = useSelector(helpTextSelector);
  const countClick = useSelector(countClickSelector);

  // const getPokemon = () => {
  //   const pokemonId = Math.floor(Math.random() * 1200);
  //   const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  //   request(url)
  //     .then((data) => {
  //       dispatch(setPokemon(data));
  //       dispatch(renameBtn("try again"));
  //       dispatch(addCountClick(1));
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       dispatch(setPokemon("error"));
  //       dispatch(setHelpText("Oops, there's been an error. Try again."));
  //       dispatch(renameBtn("try again"));
  //     });
  // };

  const getPokemonData = async () => {
    dispatch(pokemonDataLoading());
    const pokemonId = Math.floor(Math.random() * 1000);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await res.json();
    dispatch(pokemonDataLoaded(data));
    dispatch(renameBtn("try again"));
    dispatch(addCountClick(1));
  };

  const isLoading = useSelector(isloadingSelector);
  console.log(isLoading);
  // useEffect(() => {
  //   getPokemonData();
  // }, []);

  return (
    <main className={styles.main}>
      {newPokemon !== null && newPokemon !== "error" ? (
        <>
          {countClick >= 10 ? (
            <>
              <button
                disabled
                className={`${styles.button} ${styles.button_disable} `}
                onClick={getPokemonData}
              >
                {newBtnText}
              </button>
              <p className={styles.text}>Number of attempts: {countClick}/10</p>
              <p className={styles.error}>You've exhausted all attempts.</p>
            </>
          ) : (
            <>
              <button className={styles.button} onClick={getPokemonData}>
                {newBtnText}
              </button>
              <p className={styles.text}>Number of attempts: {countClick}/10</p>
              <p className={styles.error}>
                You have {10 - countClick} attempts
              </p>
            </>
          )}
          {isLoading ? (
           <p className={styles.text}>Pokemon data is loading ...</p>
          ) : (
            <PokemonCard newPokemon={newPokemon} />
          )}
        </>
      ) : (
        <>
          <button className={styles.button} onClick={getPokemonData}>
            {newBtnText}
          </button>
          <span className={styles.arrow}>↑</span>
          <p className={styles.text}>{helpText}</p>
        </>
      )}
    </main>
  );
}
