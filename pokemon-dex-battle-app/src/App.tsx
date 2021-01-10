import logo from "./logo.svg";
import "./App.css";
import { Pokemon } from "./graphQL/graphql-types";
import { useSelector } from "react-redux";
import { IStoreState } from "./redux/store";
import { GetPokemons } from "./graphQL/graphql-queries";

function App() {
  GetPokemons();
  const pokemons: Pokemon[] = useSelector(
    (state: IStoreState) => state.pokemonAppState.pokemons
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {pokemons.forEach((pokemon: Pokemon) => {
          <p>{pokemon.name}</p>;
        })}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
