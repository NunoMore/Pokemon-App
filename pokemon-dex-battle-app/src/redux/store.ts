import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IPokemonAppState, PokemonAppReducer } from "./pokemonApp.reducer";

export interface IStoreState {
  pokemonAppState: IPokemonAppState;
}

export const reducers = combineReducers({
  pokemonAppState: PokemonAppReducer,
});

export const store = createStore(reducers, composeWithDevTools());
