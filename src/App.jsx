import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("butterfree");
  const [pokemon, setPokemon] = useState("");

  const handleInput = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setSearchTerm(event.target[0].value);
  };

  const fetchData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}/`)
      .then((pokemon) => pokemon.json())
      .then((pokemons) => {
        return setPokemon(pokemons);
      })
    console.log(pokemon);
  };

  useEffect(fetchData, [searchTerm]);
  return (
    <div className="App">
      <Navbar handleInput={handleInput} />
      {!pokemon && <h2>Pokemon Not found</h2>}
      {pokemon && <Cards pokemon={pokemon} />}
    </div>
  );
};

export default App;
