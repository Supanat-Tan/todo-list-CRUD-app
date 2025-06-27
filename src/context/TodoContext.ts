import { createContext } from "react";

export interface ToDo {
  _id: string;
  todo: string;
}

export interface ToDoContextType {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

export const ToDoContext = createContext<ToDoContextType | null>(null);