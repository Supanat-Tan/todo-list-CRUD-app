import type React from "react"

export interface ToDo {
    _id: string,
    todo: string,
    date: string,
}

export interface ToDoListFormProps {
    isVisible: boolean
}

export type Action = 
    | { type: "SET_TODOS"; payload: ToDo[] }
    | { type: "ADD_TODO"; payload: ToDo }
    | { type: "DELETE_TODO"; payload: string }
    | { type: "SET_LOADING"; payload: boolean };


export interface ToDoContextType {
  toDos: ToDo[];
  dispatch: React.Dispatch<Action>;
}

//Props
export interface ToDoListDetailProps {
  data: ToDo;
}

