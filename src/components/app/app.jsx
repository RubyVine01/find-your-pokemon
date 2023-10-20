import { useState } from "react";
import { request } from "../../units/api";
import Header from "../header/header";
import Main from "../main/main";
import "./app.module.css";

function App() {
  const pokemonId = Math.floor(Math.random() * 1017);
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  const [pokemonData, setPokemonData] = useState(null);

  function getPokemonData() {
    request(url)
      .then((data) => {
        setPokemonData(data);
      })
      .catch(console.error);
  }

  //console.log(pokemonData)

  return (
    <div className="App">
      <Header />
      <Main pokemonData={pokemonData} getPokemonData={getPokemonData} />
    </div>
  );
}

export default App;
