import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../graphQL/graphql-types";

export interface IBattleState {
  myTeam: Pokemon[];
  currentPokemon: Pokemon | undefined;
  currentHP: number;
  opponentTeam: Pokemon[];
  currentOpponent: Pokemon | undefined;
  currentOpponentHP: number;
  fighting: boolean;
}

export const BattleInitialState: IBattleState = {
  opponentTeam: [],
  myTeam: [],
  currentHP: 0,
  currentOpponentHP: 0,
  currentOpponent: undefined,
  currentPokemon: undefined,
  fighting: false,
};

export const BattleActionTypes = {
  ADD_MY_TEAM: "ADD_MY_TEAM",
  REMOVE_MY_TEAM: "REMOVE_MY_TEAM",
  SET_OPPONENT_TEAM: "SET_OPPONENT_TEAM",
  CHOOSE_OPPONENT: "CHOOSE_OPPONENT",
  CHOOSE_CURRENT_POKEMON: "CHOOSE_CURRENT_POKEMON",
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
  chooseCurrentPokemon: createAction(
    BattleActionTypes.CHOOSE_CURRENT_POKEMON,
    (pokemon: Pokemon) => {
      return { payload: pokemon };
    }
  ),
  addMyTeam: createAction(BattleActionTypes.ADD_MY_TEAM, (pokemon: Pokemon) => {
    return { payload: pokemon };
  }),
  removeMyTeam: createAction(
    BattleActionTypes.REMOVE_MY_TEAM,
    (pokemon: Pokemon) => {
      return { payload: pokemon };
    }
  ),
  setOpponentTeam: createAction(
    BattleActionTypes.SET_OPPONENT_TEAM,
    (pokemonTeam: Pokemon[]) => {
      return { payload: pokemonTeam };
    }
  ),
};

export const BattleReducer = createReducer(BattleInitialState, {
  [BattleActions.fight.type]: (state: IBattleState) => {
    state.fighting = true;
    state.currentPokemon = state.myTeam[0];
    state.currentHP = state.myTeam[0].maxHP;
  },
  [BattleActions.endFight.type]: () => BattleInitialState,
  [BattleActions.chooseOpponent.type]: (
    state: IBattleState,
    action: PayloadAction<Pokemon>
  ) => {
    state.currentOpponent = action.payload;
    state.currentOpponentHP = action.payload.maxHP;
  },
  [BattleActions.chooseCurrentPokemon.type]: (
    state: IBattleState,
    action: PayloadAction<Pokemon>
  ) => {
    state.currentPokemon = action.payload;
    state.currentHP = action.payload.maxHP;
  },
  [BattleActions.setOpponentTeam.type]: (
    state: IBattleState,
    action: PayloadAction<Pokemon[]>
  ) => {
    state.opponentTeam = action.payload;
    state.currentOpponent = action.payload[0];
    state.currentOpponentHP = action.payload[0].maxHP;
  },
  [BattleActions.addMyTeam.type]: (
    state: IBattleState,
    action: PayloadAction<Pokemon>
  ) => {
    !state.myTeam.find((p) => p.name === action.payload.name) &&
      state.myTeam.length < 5 &&
      state.myTeam.push(action.payload);
  },
  [BattleActions.removeMyTeam.type]: (
    state: IBattleState,
    action: PayloadAction<Pokemon>
  ) => {
    state.myTeam.find((p) => p.name === action.payload.name) &&
      state.myTeam.length > 1 &&
      state.myTeam.splice(
        state.myTeam.findIndex((p) => p.name === action.payload.name),
        1
      );
  },
  [BattleActions.attack.type]: (
    state: IBattleState,
    action: PayloadAction<{ damage: number; attackOpponent: boolean }>
  ) => {
    action.payload.attackOpponent
      ? (state.currentOpponentHP -= action.payload.damage)
      : (state.currentHP -= action.payload.damage);
  },
});
