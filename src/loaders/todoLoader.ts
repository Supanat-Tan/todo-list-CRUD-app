import { redirect, type LoaderFunction } from "react-router-dom";
import { apiCall } from "../services/todoService"

export const todoLoader: LoaderFunction = async () => {
   try {
      const result = await apiCall("get-all-todo");

      if ('error' in result) {
         throw redirect("/login");
      }

      return result
   }
   catch(err) {
      if (err instanceof Response) {
         throw err
      }
      
      console.error(err)
      return { error: "Failed to Load todo list. Server maybe currently down"}
   }
};