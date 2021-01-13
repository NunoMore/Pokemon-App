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
  FAINT_MY_TEAM: "FAINT_MY_TEAM",
  FAINT_OPPONENT: "FAINT_OPPONENT",
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
  faintMyTeam: createAction(
    BattleActionTypes.FAINT_MY_TEAM,
    (pokemon: Pokemon) => {
      return { payload: pokemon };
    }
  ),
  faintOpponentTeam: createAction(
    BattleActionTypes.FAINT_OPPONENT,
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
  [BattleActions.endFight.type]: (state: IBattleState) => {
    state.fighting = false;
    state.currentOpponent = undefined;
    state.currentPokemon = undefined;
    state.currentOpponentHP = 0;
    state.currentHP = 0;
    state.opponentTeam = [];
    state.myTeam = [];
    
  },
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
  [BattleActions.faintMyTeam.type]: (
    state: IBattleState,
    action: PayloadAction<Pokemon>
  ) => {
    state.myTeam.find((p) => p.name === action.payload.name) &&
      state.myTeam.splice(
        state.myTeam.findIndex((p) => p.name === action.payload.name),
        1
      );
    state.currentPokemon = state.myTeam.find((p) => p);
    state.currentHP = state.currentPokemon ? state.currentPokemon.maxHP : 0;
  },
  [BattleActions.faintOpponentTeam.type]: (
    state: IBattleState,
    action: PayloadAction<Pokemon>
  ) => {
    state.opponentTeam.find((p) => p.name === action.payload.name) &&
      state.opponentTeam.splice(
        state.opponentTeam.findIndex((p) => p.name === action.payload.name),
        1
      );
    state.currentOpponent = state.opponentTeam.find((p) => p);
    state.currentOpponentHP = state.currentOpponent
      ? state.currentOpponent.maxHP
      : 0;
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
