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
import { Arena } from "./stories/Arena/Arena";

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
  const opponent: Pokemon | undefined = useSelector(
    (state: IStoreState) => state.pokemonAppState.opponent
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
    <div className="App">
      <Header />
      {(opponent && selectedPokemon && (
        <Arena opponentInfo={opponent} pokemonInfo={selectedPokemon} />
      )) || (
        <div>
          <SearchBar filterAction={filterAction} />
          <div className="mainGrid">
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
      )}
    </div>
  );
}

export default App;
