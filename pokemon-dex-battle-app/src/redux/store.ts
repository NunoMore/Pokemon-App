import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IBattleState, BattleReducer } from "./battle.reducer";
import { IHomeState, HomeReducer } from "./home.reducer";
import { ISidePanelState, SidePanelReducer } from "./side-panel.reducer";

export interface IStoreState {
  homeState: IHomeState;
  battleState: IBattleState;
  sidePanelState: ISidePanelState;
}

export const reducers = combineReducers({
  homeState: HomeReducer,
  battleState: BattleReducer,
  sidePanelState: SidePanelReducer,
});

export const store = createStore(reducers, composeWithDevTools());
