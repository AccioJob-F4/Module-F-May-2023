import { INCREMENT, DECREMENT } from "../actions/actions";
import { INITIAL_STATE } from "../store";

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
