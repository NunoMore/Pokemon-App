import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../graphQL/graphql-types";

export interface ISidePanelState {
  selectedPokemon: Pokemon | undefined;
  sidePanelOpen: boolean;
}

export const SidePanelInitialState: ISidePanelState = {
  sidePanelOpen: false,
  selectedPokemon: undefined,
};

export const SidePanelActionTypes = {
  SELECT_POKEMON: "SELECT_POKEMON",
  CLOSE_SIDE_PANEL: "CLOSE_SIDE_PANEL",
};

export const SidePanelActions = {
  closeSidePanel: createAction(SidePanelActionTypes.CLOSE_SIDE_PANEL),
  selectPokemon: createAction(
    SidePanelActionTypes.SELECT_POKEMON,
    (pokemon: Pokemon) => {
      return { payload: pokemon };
    }
  ),
};

export const SidePanelReducer = createReducer(SidePanelInitialState, {
  [SidePanelActions.closeSidePanel.type]: (state: ISidePanelState) =>
    (state = SidePanelInitialState),
  [SidePanelActions.selectPokemon.type]: (
    state: ISidePanelState,
    action: PayloadAction<Pokemon>
  ) => {
    state.selectedPokemon = action.payload;
    state.sidePanelOpen = true;
  },
});
