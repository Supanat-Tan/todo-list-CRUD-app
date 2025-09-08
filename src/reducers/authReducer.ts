import type { AuthAction, AuthState } from "../types/type";

export const authReducer = (state: AuthState, action: AuthAction) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload };

        case "LOGOUT":
            return { user: null };

        case "SET_USER":
            return {...state, user: action.payload };

        default:
            return state
    }
};