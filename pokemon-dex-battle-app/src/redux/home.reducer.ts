import { ApolloError } from "@apollo/client";
import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../graphQL/graphql-types";

export interface IHomeState {
  allPokemon: Pokemon[];
  filteredPokemon: Pokemon[];
  loading: boolean;
  sidePanelOpen: boolean;
  error: ApolloError | null;
}

export const HomeInitialState: IHomeState = {
  error: null,
  loading: false,
  sidePanelOpen: false,
  allPokemon: [],
  filteredPokemon: [],
};

export const HomeActionTypes = {
  LOADING: "LOADING",
  SET_ERROR: "SET_ERROR",
  FILTER_POKEMON: "FILTER_POKEMON",
  SET_ALL_POKEMON: "SET_ALL_POKEMON",
};

export const HomeActions = {
  loading: createAction(HomeActionTypes.LOADING, (loading: boolean) => {
    return { payload: loading };
  }),
  setError: createAction(HomeActionTypes.SET_ERROR, (error: ApolloError) => {
    return { payload: error };
  }),
  setAllPokemon: createAction(
    HomeActionTypes.SET_ALL_POKEMON,
    (pokemons: Pokemon[]) => {
      return { payload: pokemons };
    }
  ),
  filterPokemon: createAction(
    HomeActionTypes.FILTER_POKEMON,
    (searchValue: string) => {
      return { payload: searchValue.toLocaleLowerCase() };
    }
  ),
};

export const HomeReducer = createReducer(HomeInitialState, {
  [HomeActions.filterPokemon.type]: (
    state: IHomeState,
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
  [HomeActions.setError.type]: (
    state: IHomeState,
    action: PayloadAction<ApolloError>
  ) => {
    state.error = action.payload;
  },
  [HomeActions.loading.type]: (
    state: IHomeState,
    action: PayloadAction<boolean>
  ) => {
    state.loading = action.payload;
  },
  [HomeActions.setAllPokemon.type]: (
    state: IHomeState,
    action: PayloadAction<Pokemon[]>
  ) => {
    state.allPokemon = action.payload;
    state.filteredPokemon = action.payload;
  },
});
