import React from "react";
import { useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "../reducers/authReducer";

const initialState = {
    user: null,
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") || "null");

        if (user) {
            dispatch({ type: "LOGIN", payload: user});
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user: state.user, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}