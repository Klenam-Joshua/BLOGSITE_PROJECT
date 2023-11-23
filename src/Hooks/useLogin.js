import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext"
import { projectAuth } from "../firebase/firebase";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [isCancelled, setIsCancelled] = useState(false);
           const {dispatch} = useAuthContext();


           const loginUser = async (credentials)=>{
               setIsLoading(true);
               setError(false)
            try{
                console.log(credentials.email)
                 const resp = await projectAuth.signInWithEmailAndPassword(credentials.email, credentials.password);
                 if(!resp){
                    setIsLoading(false);
                    setError("there wase an error signing user in")
                 }
                  dispatch({type:"LOGIN", payload:{...resp.user}})
               
                setIsLoading(false)
            }
                 
            catch(error){

                 try{
                    let errorMessage = JSON.parse(error.message).error.message.split("_").join(" ").toLowerCase();
                    setError(errorMessage)
                 }
              catch(invalidTestError){
                      setError(error.message)
              }
             
              
                
              
                setIsLoading(false);
                console.log(error.message)
                         
 
            }
           }


           useEffect(()=>{
                    setIsCancelled(true)
           },[])

   return {isLoading, error,loginUser}



}


