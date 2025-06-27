import { useContext } from "react";
import { ToDoContext } from "../context/TodoContext";


export const useToDoContext = () => {
  const context = useContext(ToDoContext);
  if (!context) throw new Error("useToDoContext must be used within ToDoProvider");
  return context;
};