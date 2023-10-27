import PokemonCard from "../../pokemon-card/pokemon-card";
import styles from "./main.module.css";
import { useDispatch, useSelector } from "react-redux";
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
import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonDataThunk } from "../../services/middleware/pokemonDataThunk";

export default function Main() {
  const dispatch = useDispatch();
  const newPokemon = useSelector(pokemonDataSelector);
  const newBtnText = useSelector(btnTextSelector);
  const helpText = useSelector(helpTextSelector);
  const countClick = useSelector(countClickSelector);



  const isLoading = useSelector(isloadingSelector);


  const handleGetPokemonData = () => {
    dispatch(pokemonDataThunk())
      .then((result) => {
        if (pokemonDataThunk.fulfilled.match(result)) {
          dispatch(renameBtn("try again"));
          dispatch(addCountClick(1));
        } else if (pokemonDataThunk.rejected.match(result)) {
          // Обработка ошибки, если необходимо
        }
      });
  };


  return (
    <main className={styles.main}>
      {newPokemon !== null && newPokemon !== "error" ? (
        <>
          {countClick >= 10 ? (
            <>
              <button
                disabled
                className={`${styles.button} ${styles.button_disable} `}
                onClick={handleGetPokemonData}
              >
                {newBtnText}
              </button>
              <p className={styles.text}>Number of attempts: {countClick}/10</p>
              <p className={styles.error}>You've exhausted all attempts.</p>
            </>
          ) : (
            <>
              <button className={styles.button} onClick={handleGetPokemonData}>
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
          <button className={styles.button} onClick={handleGetPokemonData}>
            {newBtnText}
          </button>
          <span className={styles.arrow}>↑</span>
          <p className={styles.text}>{helpText}</p>
        </>
      )}
    </main>
  );
}
