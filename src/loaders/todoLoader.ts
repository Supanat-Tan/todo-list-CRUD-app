import { redirect, type LoaderFunction } from "react-router-dom";
import { apiCall } from "../services/todoService"

export const todoLoader: LoaderFunction = async () => {
   //Cookies setup
   try {
      const response = await fetch('https://supanat-main-backend.onrender.com/api/auth/me', {
         credentials: "include"
      });

      if (!response.ok) {
         throw redirect("/login");
      }

      const user = await response.json();

      if (!user || !user._id) {
         throw redirect("/login");
      }
      
      const todoResponse = await apiCall('get-all-todo', user._id);

      if (!todoResponse) {
         console.log("Todo fetch failed");
         return { message: "Error fetching todo"}
      }
      
      return todoResponse;

   }
   catch(err) {
      console.log("Error in todoLoader: ", err)
      throw redirect("/login");
   }
};