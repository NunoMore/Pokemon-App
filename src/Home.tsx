import "./Home.css";
import { Pokemon } from "./graphQL/graphql-types";
import { useSelector } from "react-redux";
import { IStoreState } from "./redux/store";
import { View } from "./stories/View/View";
import { Header } from "./stories/Header/Header";
import { SearchBar } from "./stories/Search/Search";
import { Arena } from "./stories/Arena/Arena";

function Home() {
  const filteredPokemon: Pokemon[] = useSelector(
    (state: IStoreState) => state.homeState.filteredPokemon
  );
  const sidePanelOpen: boolean = useSelector(
    (state: IStoreState) => state.sidePanelState.sidePanelOpen
  );
  const selectedPokemon: Pokemon | undefined = useSelector(
    (state: IStoreState) => state.sidePanelState.selectedPokemon
  );
  const myTeam: Pokemon[] = useSelector(
    (state: IStoreState) => state.battleState.myTeam
  );
  const fighting: boolean = useSelector(
    (state: IStoreState) => state.battleState.fighting
  );

  return (
    <div className="App">
      <Header
        fighting={fighting}
        isTeamReady={myTeam.length >= 3 ? true : false}
      />
      {(fighting && myTeam.length > 0 && <Arena />) || (
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
