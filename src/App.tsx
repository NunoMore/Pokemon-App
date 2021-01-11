import "./App.css";
import { Pokemon } from "./graphQL/graphql-types";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "./redux/store";
import GetAllPokemonQuery from "./graphQL/graphql-queryStrings";
import { useQuery } from "@apollo/client";
import { HomeActions } from "./redux/home.reducer";
import Home from "./Home";

function App() {
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GetAllPokemonQuery);
  dispatch(HomeActions.loading(loading));
  if (error) {
    dispatch(HomeActions.setError(error));
  } else if (!loading) {
    dispatch(HomeActions.setAllPokemon(data.pokemons));
  }

  return <div className="App">{!loading && <Home />}</div>;
}

export default App;
