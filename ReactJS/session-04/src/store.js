import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { counterReducer, userReducer } from "./reducers/reducers";

export const INITIAL_STATE = {
  counterValue: 0,
};

const customMiddleware = (store) => (next) => (action) => {
  console.log("Before dispatch : ", action);

  // action.type = "DECREMENT";

  // logic to modify action object

  const result = next(action);

  console.log("After dispatch : ", store.getState());

  return result;
};

// const store = createStore(
//   counterReducer,
//   INITIAL_STATE,
//   applyMiddleware(customMiddleware)
// );

export const USER_INITIAL_STATE = {
  loading: true,
  error: null,
  user: [],
};

const store = createStore(
  userReducer,
  USER_INITIAL_STATE,
  composeWithDevTools(applyMiddleware(thunk))
);

// const currentState = store.getState();

export default store;

// REDUX THUNK
