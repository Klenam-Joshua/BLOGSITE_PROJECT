import { createContext, useReducer } from "react"

export const SettingsContext = createContext();


const SettingsContextProvider = ({children}) => {




const settingsReducer = (state, action)=>{
        switch (action.type) {
            case "OPEN_SIDEBAR":
                return {...state,sidebarIsOpen:!state.sidebarIsOpen}              
               

            case "OPEN_EXIT_MODAL":
                 return {...state, exitModalIsOpen:!state.exitModalIsOpen}

            case "NOTIFICATION_MODAL_IS_OPEN":

                 return {...state, notificationModalIsOpen:!state.notificationModalIsOpen}

            case "CHAT_MODAL_IS_OPEN":

                return {...state,chatModalIsOpen:!state.chatModalIsOpen}
            default:
                return state;

                
        }
}


//use reducer hook that handles the settings

const [settings, dispatch] = useReducer(settingsReducer,
    {
     sidebarIsOpen:true,
     exitModalIsOpen:false,
     notificationModalIsOpen:false,
   })


  



  return (
      <SettingsContext.Provider   value={{...settings,dispatch}}>
              {children}
      </SettingsContext.Provider>
  )
}

export default SettingsContextProvider
