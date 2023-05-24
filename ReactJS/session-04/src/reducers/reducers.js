import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "../actions/actions";
import { INITIAL_STATE, USER_INITIAL_STATE } from "../store";

export const counterReducer = (state = INITIAL_STATE, action) => {
  console.log({ state, action });
  switch (action.type) {
    case INCREMENT:
      return { ...state, counterValue: state.counterValue + 1 };
    case DECREMENT:
      return { ...state, counterValue: state.counterValue - 1 };
    default:
      return state;
  }
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  console.log({ state, action });
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };

    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
