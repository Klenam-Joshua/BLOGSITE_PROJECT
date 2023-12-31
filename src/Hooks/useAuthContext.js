import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"

export const useAuthContext = () => {
   const userContext = useContext(AuthContext)

    return  userContext
}

