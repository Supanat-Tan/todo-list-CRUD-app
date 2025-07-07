import { createContext } from "react";
import type { ToDoContextType } from "../types/type"


export const ToDoContext = createContext<ToDoContextType | null>(null);