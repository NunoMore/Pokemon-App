import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "./../graphQL/graphql-types";

export interface IPokemonAppState {
  pokemons: Pokemon[];
  selectedPokemon: Pokemon;
  loading: boolean;
  error: any;
}

export const PokemonAppInitialState: IPokemonAppState = {
  error: null,
  loading: false,
  pokemons: [],
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
  SET_ALL_POKEMON: "GET_ALL_POKEMON",
  LOADING: "LOADING",
  SET_ERROR: "SET_ERROR",
};

export const PokemonAppActions = {
  loading: createAction(PokemonAppActionTypes.LOADING, (loading: boolean) => {
    return { payload: loading };
  }),
  setError: createAction(
    PokemonAppActionTypes.SET_ERROR,
    (error: any) => {
      return { payload: error };
    }
  ),
  setAllPokemon: createAction(
    PokemonAppActionTypes.SET_ALL_POKEMON,
    (pokemons: Pokemon[]) => {
      return { payload: pokemons };
    }
  ),
};

export const PokemonAppReducer = createReducer(PokemonAppInitialState, {
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
    state.pokemons = action.payload;
  },
});
