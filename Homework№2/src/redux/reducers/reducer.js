    import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import todoReducer from "./todoReducer";

export const rootReducer = combineReducers({
    mainReducer,
    todoReducer
})
    import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER } from './types';

const initialState = {
  todos: [],
  filter: 'all',
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}
