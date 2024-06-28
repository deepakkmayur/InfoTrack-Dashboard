import axios from "axios";
import env from "../config";

export const getData=async()=>{
   try {
      const response=await axios.get(env.API_URL)
      return response.data
   } catch (error) {
       console.log(error);
   }
}


