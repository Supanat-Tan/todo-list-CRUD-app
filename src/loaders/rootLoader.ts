import { redirect, type LoaderFunction } from "react-router-dom";
import { apiCall } from "../services/todoService"

export const rootLoader: LoaderFunction = async () => {
    const response = await apiCall('check-user')

    if (!response.ok) {
        console.log("Response from root loader", response)
        throw redirect('/login')
    }

    const user = await response.json()

    console.log("From rootLoader user: ", user)
    return user 
}
