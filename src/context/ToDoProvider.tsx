import React, { useReducer } from "react";
import { ToDoContext } from "./TodoContext";
import { todoReducer } from "../reducers/todoReducer";

const initialState = { 
  toDos: [],
};

export const ToDoProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <ToDoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
};
