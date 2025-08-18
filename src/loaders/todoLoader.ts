import { redirect, type LoaderFunction } from "react-router-dom";
import { apiCall } from "../services/todoService"

export const todoLoader: LoaderFunction = async () => {
   //Cookies setup
   try {
      const response = await fetch('/api/auth/me', {
         credentials: "include"
      });

      if (!response.ok) {
         throw redirect("/login");
      }

      const userCookie = await response.json();
      
      const todoResponse = await apiCall('get-all-todo', userCookie._id);

      if (!todoResponse) {
         console.log("Todo fetch failed");
         return { message: "Error fetching todo"}
      }
      
      return todoResponse;

   }
   catch(err) {
      console.log(err)
      throw redirect("/login");
   }
};