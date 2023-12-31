import { useAuthContext } from "./useAuthContext"
import { projectAuth } from "../firebase/firebase"
import { useState } from "react"

export const useLogout = () => {

    const {user, dispatch}  = useAuthContext()
    const {isLoading, setIsLoading} = useState(false);
    const {error, setError} = useState(null)
 const logoutUser = async()=>{
     try{
            await projectAuth.signOut();
            dispatch({type:"LOGOUT"})
     }
     catch(error){
            setError(error.message)
     }
 }

return {logoutUser, isLoading, error}
}

