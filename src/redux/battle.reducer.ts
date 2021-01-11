import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../graphQL/graphql-types";

export interface IBattleState {
  // todo : team 
  currentPokemon: Pokemon | undefined;
  currentHP: number;
  opponentHP: number;
  opponent: Pokemon | undefined;
  fighting: boolean;
}

export const BattleInitialState: IBattleState = {
  currentHP: 0,
  opponentHP: 0,
  opponent: undefined,
  currentPokemon: undefined,
  fighting: false,
};

export const BattleActionTypes = {
  CHOOSE_OPPONENT: "CHOOSE_OPPONENT",
  GO: "GO_POKEMON",
  FIGHT: "FIGHT",
  END_FIGHT: "END_FIGHT",
  ATTACK: "ATTACK",
};

export const BattleActions = {
  fight: createAction(BattleActionTypes.FIGHT),
  endFight: createAction(BattleActionTypes.END_FIGHT),
  attack: createAction(
    BattleActionTypes.ATTACK,
    (damage: number, attackOpponent: boolean) => {
      return { payload: { damage: damage, attackOpponent: attackOpponent } };
    }
  ),
  chooseOpponent: createAction(
    BattleActionTypes.CHOOSE_OPPONENT,
    (opponent: Pokemon) => {
      return { payload: opponent };
    }
  ),
  setCurrentPokemon: createAction(BattleActionTypes.GO, (pokemon: Pokemon) => {
    return { payload: pokemon };
  }),
};

export const BattleReducer = createReducer(BattleInitialState, {
  [BattleActions.fight.type]: (state: IBattleState) => {
    state.fighting = true;
  },
  [BattleActions.endFight.type]: (state: IBattleState) =>
    (state = BattleInitialState),
  [BattleActions.chooseOpponent.type]: (
    state: IBattleState,
    action: PayloadAction<Pokemon>
  ) => {
    state.opponent = action.payload;
    state.opponentHP = action.payload.maxHP;
  },
  [BattleActions.setCurrentPokemon.type]: (
    state: IBattleState,
    action: PayloadAction<Pokemon>
  ) => {
    state.currentPokemon = action.payload;
    state.currentHP = action.payload.maxHP;
  },
  [BattleActions.attack.type]: (
    state: IBattleState,
    action: PayloadAction<{ damage: number; attackOpponent: boolean }>
  ) => {
    action.payload.attackOpponent
      ? (state.opponentHP -= action.payload.damage)
      : (state.currentHP -= action.payload.damage);
  },
});
