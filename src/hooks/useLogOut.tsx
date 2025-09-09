import { apiCall } from "../services/todoService";
import { useAuthContext } from "./useAuthContext"
import { useToDoContext } from "./useTodoContext";


export const useLogOut = () => {
    const { dispatch } = useAuthContext();
    const { dispatch: todoDispatch } = useToDoContext();
    
    const logout = async () => {
        await apiCall('logout');

        dispatch({ type: "LOGOUT"});
        
        todoDispatch({ type: "SET_TODOS", payload: []})
    }
    return { logout }
}
