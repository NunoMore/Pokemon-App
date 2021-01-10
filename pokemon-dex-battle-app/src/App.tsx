import "./App.css";
import { Pokemon } from "./graphQL/graphql-types";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "./redux/store";
import { View } from "./stories/View/View";
import { GetPokemons } from "./graphQL/graphql-queries";
import GetAllPokemonQuery from "./graphQL/graphql-queryStrings";
import { useQuery } from "@apollo/client";
import { PokemonAppActions } from "./redux/pokemonApp.reducer";

function App() {
  const dispatch = useDispatch();
  const pokemons: Pokemon[] = useSelector(
    (state: IStoreState) => state.pokemonAppState.pokemons
  );
  const { loading, error, data } = useQuery(GetAllPokemonQuery);
  dispatch(PokemonAppActions.loading(loading));
  if (error) {
    dispatch(PokemonAppActions.setError(error));
  } else if (!loading) {
    dispatch(PokemonAppActions.setAllPokemon(data.pokemons));
  }

  return (
    <div className="App">
      <header>
        {/** todo create header in storybook */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="grid">
        {pokemons.map((pokemon: Pokemon) => {
          return <View detailed={false} pokemonInfo={pokemon} />;
        })}
      </div>
    </div>
  );
}

export default App;
