import type { LoaderFunction } from "react-router-dom";
import { apiCall } from "../services/todoService"

export const todoLoader: LoaderFunction = async () => {
   try {
      const json = await apiCall('get-all-todo');
      if (json) {
         return json;
     }
   } 
   catch (err) {
      console.log(err)
      return { error: "Failed to fetch data."}
   }
};