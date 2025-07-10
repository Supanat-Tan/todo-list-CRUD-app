import { createContext } from "react";
import type { AuthContextType } from "../types/type";


export const AuthContext = createContext<AuthContextType | null>(null)