import { types } from './types';

const initialState = {
  count: 0,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, count: state.count + 1 };
    case types.DECREMENT:
      return { ...state, count: Math.max(state.count - 1, 0) };
    case types.INCREMENT_10:
      return { ...state, count: state.count + 10 };
    case types.DECREMENT_10:
      return { ...state, count: Math.max(state.count - 10, 0) };
    case types.RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}
