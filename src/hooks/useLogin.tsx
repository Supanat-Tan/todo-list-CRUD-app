import type { UserResponse } from "../types/type";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const { dispatch } = useAuthContext()

    const login = async (response: UserResponse) => {
        localStorage.setItem("token", response.token)
        localStorage.setItem("user", JSON.stringify(response.user))

        dispatch({ type: "LOGIN", payload: response.user});
    }

    return (
        { login }
    )
}
