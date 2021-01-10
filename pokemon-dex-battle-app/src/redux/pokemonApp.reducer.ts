import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "./../graphQL/graphql-types";

export interface IPokemonAppState {
  allPokemon: Pokemon[];
  filteredPokemon: Pokemon[];
  selectedPokemon: Pokemon;
  loading: boolean;
  error: any;
}

export const PokemonAppInitialState: IPokemonAppState = {
  error: null,
  loading: false,
  filteredPokemon: [],
  allPokemon: [],
  selectedPokemon: {
    name: "",
    image: "",
    maxHP: 0,
    resistant: [],
    weaknesses: [],
    evolutions: [],
    types: [],
    attacks: {
      fast: [],
      special: [],
    },
  },
};

export const PokemonAppActionTypes = {
  SET_ALL_POKEMON: "SET_ALL_POKEMON",
  FILTER_POKEMON: "FILTER_POKEMON",
  LOADING: "LOADING",
  SET_ERROR: "SET_ERROR",
};

export const PokemonAppActions = {
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
};

export const PokemonAppReducer = createReducer(PokemonAppInitialState, {
  [PokemonAppActions.filterPokemon.type]: (
    state: IPokemonAppState,
    action: PayloadAction<string>
  ) => {
    state.filteredPokemon =
      action.payload === ""
        ? state.allPokemon
        : state.allPokemon.filter(
            (p) =>
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
