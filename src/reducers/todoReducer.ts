import type { ToDo, Action } from "../types/type";

export const todoReducer = (state: { toDos: ToDo[] }, action: Action) => {
  switch (action.type) {
    case "SET_TODOS":
      return {
        toDos: action.payload,
      };
    
    case "ADD_TODO":
      return {
        toDos: [...state.toDos, action.payload]
      }

    case "DELETE_TODO":
      return {
        ...state,
        toDos: state.toDos.filter(todo => todo._id !== action.payload)
      }

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      }
      
    default:
      return state;
  }
}