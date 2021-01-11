import "./App.css";
import { Pokemon } from "./graphQL/graphql-types";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "./redux/store";
import { View } from "./stories/View/View";
import GetAllPokemonQuery from "./graphQL/graphql-queryStrings";
import { useQuery } from "@apollo/client";
import { PokemonAppActions } from "./redux/pokemonApp.reducer";
import { Header } from "./stories/Header/Header";
import { SearchBar } from "./stories/Search/Search";

function App() {
  const dispatch = useDispatch();
  const allPokemon: Pokemon[] = useSelector(
    (state: IStoreState) => state.pokemonAppState.allPokemon
  );
  const filteredPokemon: Pokemon[] = useSelector(
    (state: IStoreState) => state.pokemonAppState.filteredPokemon
  );
  const selectedPokemon: Pokemon | undefined = useSelector(
    (state: IStoreState) => state.pokemonAppState.selectedPokemon
  );

  const { loading, error, data } = useQuery(GetAllPokemonQuery);
  dispatch(PokemonAppActions.loading(loading));
  if (error) {
    dispatch(PokemonAppActions.setError(error));
  } else if (!loading && allPokemon.length === 0) {
    dispatch(PokemonAppActions.setAllPokemon(data.pokemons));
  }

  const filterAction = (str: string) =>
    dispatch(PokemonAppActions.filterPokemon(str));

  return (
    <div className="App row">
      <div className="row">
        <Header />
        <SearchBar filterAction={filterAction} />
      </div>
      <div className="row mainGrid">
        <div className="grid">
          {filteredPokemon.map((pokemon: Pokemon) => {
            return <View detailed={false} pokemonInfo={pokemon} />;
          })}
        </div>
        {selectedPokemon && (
          <div>
            <View detailed={true} pokemonInfo={selectedPokemon} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
