import "./Home.css";
import { Pokemon } from "./graphQL/graphql-types";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "./redux/store";
import { View } from "./stories/View/View";
import { Header } from "./stories/Header/Header";
import { SearchBar } from "./stories/Search/Search";
import { Arena } from "./stories/Arena/Arena";
import { BattleActions } from "./redux/battle.reducer";

function Home() {
  const dispatch = useDispatch();
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

  return (
    <div className="App">
      <Header
        fighting={fighting}
        isPokemonSelected={selectedPokemon ? true : false}
      />
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
                return <View detailed={false} selectedPokemon={pokemon} />;
              })}
            </div>
            {sidePanelOpen && (
              <div>
                <View detailed={true} selectedPokemon={selectedPokemon} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
