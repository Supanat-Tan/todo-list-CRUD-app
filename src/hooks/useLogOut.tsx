import { useAuthContext } from "./useAuthContext"
import { useToDoContext } from "./useTodoContext";


export const useLogOut = () => {
    const { dispatch } = useAuthContext();
    const { dispatch: todoDispatch } = useToDoContext();
    
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        dispatch({ type: "LOGOUT"});
        todoDispatch({ type: "SET_TODOS", payload: []})
    }
    return { logout }
}
