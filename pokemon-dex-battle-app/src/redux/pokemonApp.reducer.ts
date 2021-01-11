import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "./../graphQL/graphql-types";

export interface IPokemonAppState {
  allPokemon: Pokemon[];
  filteredPokemon: Pokemon[];
  selectedPokemon: Pokemon | undefined;
  opponent: Pokemon | undefined;
  loading: boolean;
  fighting: boolean;
  error: any;
}

export const PokemonAppInitialState: IPokemonAppState = {
  error: null,
  loading: false,
  fighting: false,
  filteredPokemon: [],
  allPokemon: [],
  selectedPokemon: undefined,
  opponent: undefined,
};

export const PokemonAppActionTypes = {
  SET_ALL_POKEMON: "SET_ALL_POKEMON",
  SELECT_POKEMON: "SELECT_POKEMON",
  FILTER_POKEMON: "FILTER_POKEMON",
  LOADING: "LOADING",
  FIGHT: "FIGHT",
  SET_ERROR: "SET_ERROR",
};

export const PokemonAppActions = {
  fight: createAction(PokemonAppActionTypes.FIGHT, (opponent: Pokemon) => {
    return { payload: opponent };
  }),
  loading: createAction(PokemonAppActionTypes.LOADING, (loading: boolean) => {
    return { payload: loading };
  }),
  setError: createAction(PokemonAppActionTypes.SET_ERROR, (error: any) => {
    return { payload: error };
  }),
  setAllPokemon: createAction(
    PokemonAppActionTypes.SET_ALL_POKEMON,
    (pokemons: Pokemon[]) => {
      return { payload: pokemons };
    }
  ),
  filterPokemon: createAction(
    PokemonAppActionTypes.FILTER_POKEMON,
    (searchValue: string) => {
      return { payload: searchValue.toLocaleLowerCase() };
    }
  ),
  selectPokemon: createAction(
    PokemonAppActionTypes.SELECT_POKEMON,
    (pokemonName: string) => {
      return { payload: pokemonName };
    }
  ),
};

export const PokemonAppReducer = createReducer(PokemonAppInitialState, {
  [PokemonAppActions.fight.type]: (
    state: IPokemonAppState,
    action: PayloadAction<Pokemon>
  ) => {
    state.opponent = action.payload;
  },
  [PokemonAppActions.selectPokemon.type]: (
    state: IPokemonAppState,
    action: PayloadAction<string>
  ) => {
    state.selectedPokemon = state.allPokemon.find(
      (p) => p.name === action.payload
    );
  },
  [PokemonAppActions.filterPokemon.type]: (
    state: IPokemonAppState,
    action: PayloadAction<string>
  ) => {
    state.filteredPokemon =
      action.payload === ""
        ? state.allPokemon
        : state.allPokemon.filter(
            (p) =>
              p.number.includes(action.payload) ||
              p.name.toLocaleLowerCase().includes(action.payload) ||
              p.types.filter((t) =>
                t.toLocaleLowerCase().includes(action.payload)
              ).length > 0
          );
  },
  [PokemonAppActions.setError.type]: (
    state: IPokemonAppState,
    action: PayloadAction<any>
  ) => {
    state.error = action.payload;
  },
  [PokemonAppActions.loading.type]: (
    state: IPokemonAppState,
    action: PayloadAction<boolean>
  ) => {
    state.loading = action.payload;
  },
  [PokemonAppActions.setAllPokemon.type]: (
    state: IPokemonAppState,
    action: PayloadAction<Pokemon[]>
  ) => {
    state.allPokemon = action.payload;
    state.filteredPokemon = action.payload;
  },
});
