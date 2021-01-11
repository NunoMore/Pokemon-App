import "./App.css";
import { useDispatch } from "react-redux";
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
