import { type LoaderFunction } from "react-router-dom";
import { apiCall } from "../services/todoService"

export const rootLoader: LoaderFunction = async () => {
    const response = await apiCall('check-user')

    if (!response.ok) {
        return null
    }

    return await response.json()
}
