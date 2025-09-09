import { apiCall } from "../services/todoService";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const { dispatch } = useAuthContext()

    const login = async () => {
        const response = await apiCall("check-user");

        if (response) {
            const userJson = await response.json()
            dispatch({ type: "LOGIN", payload: userJson});
        }  
    }

    return (
        { login }
    )
}
