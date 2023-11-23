import { createContext, useEffect, useReducer } from "react"
import { projectAuth } from "../firebase/firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    const authReducer = (state, action)=>{
                switch (action.type) {
                    case "LOGIN": 
                    console.log(action.payload)
                       return {...state,user:action.payload}
                    case "LOGOUT": 
                        return {...state,user:null}
                    case "AUTH_IS_READY":
                        return {...state,authIsReady:true, user:action.payload}
                      
                
                    default:
                        return state;
                   
                }
    }

const [credentials, dispatch] = useReducer(authReducer,{
    user:null,
    authIsReady:false,
})



// get user when the page loads
useEffect(()=>{
        projectAuth.onAuthStateChanged((user)=>{
           dispatch({type:"AUTH_IS_READY",payload:user})
        })
},[])




  return (
          <AuthContext.Provider  value={{...credentials, dispatch}}>
                          {children}
          </AuthContext.Provider>
  )
}

export default AuthContextProvider
