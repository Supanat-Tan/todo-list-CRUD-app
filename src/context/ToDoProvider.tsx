import React, { useState } from "react";
import { ToDoContext, type ToDo } from "./TodoContext";

export const ToDoProvider = ({ children }: { children: React.ReactNode }) => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  return (
    <ToDoContext.Provider value={{ toDos, setToDos }}>
      {children}
    </ToDoContext.Provider>
  );
};