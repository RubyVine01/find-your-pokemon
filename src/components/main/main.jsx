import PokemonCard from "../../pokemon-card/pokemon-card";
import styles from "./main.module.css";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../../units/api";
import {
  renameBtnAction,
  setPokemonAction,
  setHelpTextAction
} from "../../services/actions/pokemon-actions";
import {
  btnTextSelector,
  pokemonDataSelector,
  helpTextelector,
} from "../../services/selectors/pokemon-selectors";

export default function Main() {
  const dispatch = useDispatch();
  const newPokemon = useSelector(pokemonDataSelector);
  const newBtnText = useSelector(btnTextSelector);

  const helpText = useSelector(helpTextelector);

  const getPokemon = () => {
    // const pokemonId = Math.floor(Math.random() * 1017);
    const pokemonId = Math.floor(Math.random() * 3000);

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    request(url)
      .then((data) => {
        dispatch(setPokemonAction(data));
      })
      .catch((error) => {
        console.error(error); // Вывести ошибку в консоль
        dispatch(setPokemonAction("error")); // Записать "error" в диспатч
        dispatch(setHelpTextAction("Oops, there's been an error. Try again."));
      });

    if (newPokemon === null) {
      dispatch(renameBtnAction("try again"));
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

// newPokemon === "error" ? (
//   <>
//     <button className={styles.button} onClick={getPokemon}>
//       try again
//     </button>
//     <span className={styles.arrow}>↑</span>
//     <p className={styles.text}>Oops, there's been an error. Try again.</p>
//   </>
// )
// :
