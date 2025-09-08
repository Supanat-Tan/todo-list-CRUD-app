import type { UserResponse } from "../types/type";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const { dispatch } = useAuthContext()

    const login = async (response: UserResponse) => {
        dispatch({ type: "LOGIN", payload: response.user});
    }

    return (
        { login }
    )
}
