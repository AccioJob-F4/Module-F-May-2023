import { createStore } from "redux";
import { counterReducer } from "./reducers/reducers";

export const INITIAL_STATE = {
  counterValue: 0,
};

const store = createStore(counterReducer, INITIAL_STATE);

const currentState = store.getState();

export default store;
