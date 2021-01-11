import "./App.css";
import { Pokemon } from "./graphQL/graphql-types";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "./redux/store";
import { View } from "./stories/View/View";
import GetAllPokemonQuery from "./graphQL/graphql-queryStrings";
import { useQuery } from "@apollo/client";
import { HomeActions } from "./redux/home.reducer";
import { Header } from "./stories/Header/Header";
import { SearchBar } from "./stories/Search/Search";
import { Arena } from "./stories/Arena/Arena";
import { BattleActions } from "./redux/battle.reducer";

function App() {
  const dispatch = useDispatch();
  const allPokemon: Pokemon[] = useSelector(
    (state: IStoreState) => state.homeState.allPokemon
  );
  const filteredPokemon: Pokemon[] = useSelector(
    (state: IStoreState) => state.homeState.filteredPokemon
  );
  const selectedPokemon: Pokemon | undefined = useSelector(
    (state: IStoreState) => state.sidePanelState.selectedPokemon
  );
  const sidePanelOpen: boolean = useSelector(
    (state: IStoreState) => state.sidePanelState.sidePanelOpen
  );
  const fighting: boolean = useSelector(
    (state: IStoreState) => state.battleState.fighting
  );

  const { loading, error, data } = useQuery(GetAllPokemonQuery);
  dispatch(HomeActions.loading(loading));
  if (error) {
    dispatch(HomeActions.setError(error));
  } else if (!loading && allPokemon.length === 0) {
    dispatch(HomeActions.setAllPokemon(data.pokemons));
  }   

  return (
    <div className="App">
      <Header />
      {(fighting &&
        selectedPokemon &&
        dispatch(BattleActions.setCurrentPokemon(selectedPokemon)) && (
          <Arena />
        )) || (
        <div>
          <SearchBar />
          <div className="mainGrid">
            <div className="grid">
              {filteredPokemon.map((pokemon: Pokemon) => {
                return <View detailed={false} pokemonInfo={pokemon} />;
              })}
            </div>
            {sidePanelOpen && (
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
