import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { PokemonAppActions } from "../redux/pokemonApp.reducer";
import GetAllPokemonQuery from "./graphql-queryStrings";

export function GetPokemons() {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GetAllPokemonQuery);

  dispatch(PokemonAppActions.loading(loading));
  if (error) {
    dispatch(PokemonAppActions.setError(error));
  } else if (!loading) {
    dispatch(PokemonAppActions.setAllPokemon(data.pokemons));
  }
}
