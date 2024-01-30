import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [pokemonIndex] = useState(0);

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  useEffect(() => {
    alert("Hello pokemon trainer :)");
  }, []);

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
    </>
  );
}

export default App;
