import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("butterfree");
  const [pokemon, setPokemon] = useState("");
  const handleInput = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };
  const fetchData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/squirtle/`)
      .then((pokemon) => pokemon.json())
      .then((pokemons) => {
        return setPokemon(pokemons);
      });
    console.log(pokemon);
  };
  useEffect(fetchData(), [searchTerm]);
  return (
    <div className="App">
      <Navbar handleInput={handleInput} />
    </div>
  );
};

export default App;
